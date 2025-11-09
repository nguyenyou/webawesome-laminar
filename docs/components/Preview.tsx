"use client";
import { Frame } from "@ark-ui/react/frame";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import { Tabs, Tab } from "fumadocs-ui/components/tabs";

export const Preview = ({
  code,
  userCode,
  exampleId = "example1",
}: {
  code: string;
  userCode?: string;
  exampleId?: string;
}) => {
  const srcDoc = `<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="//cdn.jsdelivr.net/npm/@awesome.me/webawesome@3.0.0/dist-cdn/styles/themes/default.min.css" rel="stylesheet" />
<base target=_blank>
</head>
<body style='overflow: hidden'>
 <div id="${exampleId}"></div>
 
 <script type="module">
  ${code || ""}
 </script>
</body>
</html>
`;

  const displayCode = userCode || "";

  return (
    <Tabs items={["Preview", "Code"]}>
      <Tab value="Preview" className="w-full">
        <Frame
          title="Preview"
          className="outline-none rounded-lg bg-fd-background w-full h-(--height)"
          srcDoc={srcDoc}
        ></Frame>
      </Tab>
      <Tab value="Code" className="w-full">
        <DynamicCodeBlock code={displayCode} lang="scala" />
      </Tab>
    </Tabs>
  );
};
