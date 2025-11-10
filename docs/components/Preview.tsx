"use client";
import { Frame } from "@ark-ui/react/frame";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import { Tabs, Tab } from "fumadocs-ui/components/tabs";
import { useRef } from "react";
import { useTheme } from "next-themes";
import {
  useIframeThemeSync,
  applyInitialTheme,
  createSrcDoc,
} from "./iframe-theme";

export const Preview = ({
  code,
  userCode,
  exampleId = "example1",
  height,
  css,
  padding = "p-2",
}: {
  code: string;
  userCode?: string;
  exampleId?: string;
  height?: string;
  css?: string;
  padding?: string;
}) => {
  const h = height ?? "h-(--height)";
  const ref = useRef<HTMLIFrameElement>(null);
  const { theme } = useTheme();
  
  const srcDoc = createSrcDoc({
    exampleId,
    code,
    css,
    padding,
  });

  const displayCode = userCode || "";

  // Sync theme updates to iframe
  useIframeThemeSync(ref, theme);

  // return (
  //   <Tabs items={["Preview", "Code"]}>
  //     <Tab value="Preview" className="w-full">
  //       <Frame
  //         ref={ref}
  //         title="Preview"
  //         className={`outline-none rounded-lg bg-fd-background w-full ${h}`}
  //         srcDoc={srcDoc}
  //         onMount={() => {
  //           const doc = ref.current?.contentDocument
  //           if (!doc) return
  //           const script = doc.createElement('script')
  //           script.src = 'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4'
  //           doc.body.appendChild(script)
  //         }}
  //       ></Frame>
  //     </Tab>
  //     <Tab value="Code" className="w-full">
  //       <DynamicCodeBlock code={displayCode} lang="scala" />
  //     </Tab>
  //   </Tabs>
  // );

  return (
    <div className="border p-4 rounded-xl space-y-2">
      <Frame
        ref={ref}
        title="Preview"
        className={`outline-none rounded-xl bg-fd-background w-full ${h}`}
        srcDoc={srcDoc}
        onMount={() => {
          const doc = ref.current?.contentDocument;
          if (!doc) return;
          const script = doc.createElement("script");
          script.src = "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4";
          doc.body.appendChild(script);
          
          // Apply initial theme
          applyInitialTheme(doc, theme);
        }}
      ></Frame>
      <DynamicCodeBlock code={displayCode} lang="scala"/>
    </div>
  );
};
