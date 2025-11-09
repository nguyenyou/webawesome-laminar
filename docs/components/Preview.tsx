"use client";
import { Frame } from "@ark-ui/react/frame";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import { Tabs, Tab } from "fumadocs-ui/components/tabs";
import { useRef } from "react";
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
<body class="${padding}">
 <div id="${exampleId}"></div>
 
 <script type="module">
  ${code || ""}
 </script>
</body>
</html>
`;

  const displayCode = userCode || "";

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
        }}
      ></Frame>
      <DynamicCodeBlock code={displayCode} lang="scala"/>
    </div>
  );
};
