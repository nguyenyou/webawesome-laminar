"use client";
import { Frame } from "@ark-ui/react/frame";
import { useRef, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  useIframeThemeSync,
  applyInitialTheme,
  createSrcDoc,
  convertPaddingToStyle,
} from "./iframe-theme";
import { Spinner } from "./spinner";
import { DynamicCodeBlock } from "./dynamic-codeblock";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "./ui/resizable";

export const Preview = ({
  code,
  compiledSjsPath,
  exampleCode,
  exampleId = "example1",
  height,
  css,
  padding = "p-2",
  showCss,
  align,
  stretch,
}: {
  code?: string;
  compiledSjsPath?: string;
  exampleCode?: string;
  exampleId?: string;
  height?: string;
  css?: string;
  padding?: string;
  showCss?: string;
  align?: string;
  stretch?: boolean | string;
}) => {
  const h = height ?? "h-(--height)";
  const ref = useRef<HTMLIFrameElement>(null);
  const { theme } = useTheme();
  const [fetchedCode, setFetchedCode] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch code at runtime if compiledSjsPath is provided
  useEffect(() => {
    // If code is provided directly (backward compatibility), use it immediately
    if (code) {
      setFetchedCode(code);
      setIsLoading(false);
      return;
    }

    // If compiledSjsPath is provided, fetch from network
    if (compiledSjsPath) {
      const fetchCode = async () => {
        try {
          setIsLoading(true);
          setError(null);
          
          // Check if browser supports DecompressionStream API
          const supportsGzip = typeof DecompressionStream !== "undefined";
          
          if (supportsGzip) {
            // Try to fetch gzipped version first
            try {
              const gzipResponse = await fetch(`/examples/${compiledSjsPath}.js.gz`);
              if (gzipResponse.ok) {
                // Decompress the gzipped response
                const stream = gzipResponse.body;
                if (stream) {
                  const decompressionStream = new DecompressionStream("gzip");
                  const decompressedStream = stream.pipeThrough(decompressionStream);
                  const reader = decompressedStream.getReader();
                  const decoder = new TextDecoder();
                  let codeContent = "";
                  
                  while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;
                    codeContent += decoder.decode(value, { stream: true });
                  }
                  
                  // Decode any remaining bytes
                  codeContent += decoder.decode();
                  setFetchedCode(codeContent);
                  return;
                }
              }
            } catch (gzipErr) {
              // If gzip fetch/decompression fails, fall through to regular .js file
              console.debug("Gzip fetch failed, falling back to regular .js:", gzipErr);
            }
          }
          
          // Fallback to regular .js file
          const response = await fetch(`/examples/${compiledSjsPath}.js`);
          if (!response.ok) {
            throw new Error(`Failed to fetch example: ${response.statusText}`);
          }
          const codeContent = await response.text();
          setFetchedCode(codeContent);
        } catch (err) {
          setError(
            err instanceof Error ? err.message : "Failed to load example"
          );
        } finally {
          setIsLoading(false);
        }
      };
      fetchCode();
    } else {
      // No code or compiledSjsPath provided
      setIsLoading(false);
      setError("No code or compiledSjsPath provided");
    }
  }, [code, compiledSjsPath]);

  const displayCode = exampleCode || "";
  const paddingStyle = convertPaddingToStyle(padding);

  // Sync theme updates to iframe
  useIframeThemeSync(ref, theme);

  // Convert stretch prop to boolean (MDX passes string "true", but React can also pass boolean)
  const stretchBoolean = stretch === true || stretch === "true";

  // Create srcDoc only when code is available
  const srcDoc = fetchedCode
    ? createSrcDoc({
        exampleId,
        code: fetchedCode,
        css,
        padding,
        align,
        stretch: stretchBoolean,
      })
    : null;

  return (
    <div className="rounded-xl flex flex-col border overflow-hidden">
      {/* Frame component area - shows loading/error or actual Frame */}
      {isLoading ? (
        <div
          className={`outline-none rounded-xl bg-fd-background w-full ${h} flex items-center justify-center`}
        >
          <Spinner />
        </div>
      ) : error || !fetchedCode ? (
        <div
          className={`outline-none rounded-xl bg-fd-background w-full ${h} flex items-center justify-center`}
        >
          <span className="text-red-500">
            Error: {error || "Failed to load example"}
          </span>
        </div>
      ) : srcDoc ? (
        <div className={`w-full ${h} bg-fd-secondary`}>
          <ResizablePanelGroup
            direction="horizontal"
            className={`w-full h-full`}
          >
            <ResizablePanel defaultSize={100}>
              <div className="flex h-full items-center justify-center">
                <Frame
                  ref={ref}
                  title="Preview"
                  className={`outline-none bg-fd-background w-full ${h}`}
                  srcDoc={srcDoc}
                  onMount={() => {
                    const doc = ref.current?.contentDocument;
                    if (!doc) return;
                    const script = doc.createElement("script");
                    script.src =
                      "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4";
                    doc.head.appendChild(script);

                    const styleTag: HTMLStyleElement =
                      doc.createElement("style");
                    styleTag.setAttribute("type", "text/tailwindcss");
                    styleTag.textContent = `
            @layer theme, base, components, utilities;
            @import "tailwindcss/theme.css" layer(theme);
            @import "tailwindcss/utilities.css" layer(utilities);
          `;
                    doc.head.appendChild(styleTag);

                    // Apply initial theme
                    applyInitialTheme(doc, theme);
                  }}
                ></Frame>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={0}>
              <div className="flex h-full items-center justify-center p-6"></div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      ) : null}
      {/* DynamicCodeBlock always shows */}
      <div>
        <DynamicCodeBlock code={displayCode} lang="scala" />
      </div>
      {/* Show CSS code block if showCss is provided */}
      {showCss && (
        <div>
          <DynamicCodeBlock code={showCss} lang="css" />
        </div>
      )}
    </div>
  );
};
