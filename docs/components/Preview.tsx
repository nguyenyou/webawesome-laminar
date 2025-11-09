"use client";
import { Frame } from "@ark-ui/react/frame";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import { Tabs, Tab } from "fumadocs-ui/components/tabs";
import { useRef, useEffect } from "react";
import { useTheme } from "next-themes";
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
  
  // Helper function to get CSS variable value for background color
  const getBackgroundColor = (): string => {
    if (typeof window === 'undefined') return '';
    
    // Get the CSS variable value from the root element
    const root = document.documentElement;
    const value = window.getComputedStyle(root).getPropertyValue('--color-fd-background').trim();
    
    return value || '';
  };
  
  // Helper function to get CSS variable value for foreground color
  const getForegroundColor = (): string => {
    if (typeof window === 'undefined') return '';
    
    // Get the CSS variable value from the root element
    const root = document.documentElement;
    const value = window.getComputedStyle(root).getPropertyValue('--color-fd-foreground').trim();
    
    return value || '';
  };
  
  const srcDoc = `<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="//cdn.jsdelivr.net/npm/@awesome.me/webawesome@3.0.0/dist-cdn/styles/themes/default.min.css" rel="stylesheet" />
<base target=_blank>
<style>
  html, body {
    margin: 0;
  }
</style>
${css ? `<style>${css}</style>` : ""}
<style type="text/tailwindcss">
@layer theme, base, components, utilities;
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities);
</style>
</head>
<body class="${padding} transition-colors duration-700">
 <div id="${exampleId}"></div>
 
 <script type="module">
  ${code || ""}
 </script>
 <script>
  // Listen for theme and color updates from parent
  window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'theme-update') {
      const theme = event.data.theme;
      if (theme === 'dark') {
        document.documentElement.classList.add('wa-dark');
      } else {
        document.documentElement.classList.remove('wa-dark');
      }
    }
    if (event.data && event.data.type === 'background-update') {
      const backgroundColor = event.data.backgroundColor;
      if (backgroundColor) {
        document.body.style.backgroundColor = backgroundColor;
      }
    }
    if (event.data && event.data.type === 'foreground-update') {
      const foregroundColor = event.data.foregroundColor;
      if (foregroundColor) {
        document.body.style.color = foregroundColor;
      }
    }
  });
 </script>
</body>
</html>
`;

  const displayCode = userCode || "";

  // Send theme and background updates to iframe when theme changes
  useEffect(() => {
    // Skip if theme is not yet resolved (during hydration)
    if (!theme) return;
    
    // Wait a bit to ensure iframe is ready
    const timeoutId = setTimeout(() => {
      if (!ref.current?.contentWindow) return;
      
      const iframe = ref.current;
      const resolvedTheme = theme === 'system' 
        ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        : theme || 'light';
      
      const backgroundColor = getBackgroundColor();
      const foregroundColor = getForegroundColor();
      
      iframe.contentWindow?.postMessage(
        { type: 'theme-update', theme: resolvedTheme },
        '*'
      );
      
      if (backgroundColor) {
        iframe.contentWindow?.postMessage(
          { type: 'background-update', backgroundColor },
          '*'
        );
      }
      
      if (foregroundColor) {
        iframe.contentWindow?.postMessage(
          { type: 'foreground-update', foregroundColor },
          '*'
        );
      }
    }, 100);
    
    return () => clearTimeout(timeoutId);
  }, [theme]);

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
          const resolvedTheme = theme && theme !== 'system'
            ? theme
            : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
          
          if (resolvedTheme === 'dark') {
            doc.documentElement.classList.add('wa-dark');
          } else {
            doc.documentElement.classList.remove('wa-dark');
          }
          
          // Apply initial background color
          const backgroundColor = getBackgroundColor();
          if (backgroundColor) {
            doc.body.style.backgroundColor = backgroundColor;
          }
          
          // Apply initial foreground color
          const foregroundColor = getForegroundColor();
          if (foregroundColor) {
            doc.body.style.color = foregroundColor;
          }
        }}
      ></Frame>
      <DynamicCodeBlock code={displayCode} lang="scala"/>
    </div>
  );
};
