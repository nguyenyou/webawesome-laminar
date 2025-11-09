import type { VFile } from "vfile";
import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import type { Code, Root, Parent } from "mdast";
import type { MdxJsxFlowElement } from "mdast-util-mdx-jsx";
import { relative } from "path";
import {
  normalizePath,
  extractHierarchicalPathSegments,
  getCompiledJsPath,
  readCompiledJsFile,
} from "./previewUtils";

interface PreviewTransformPluginOptions {}

/**
 * Convert hyphenated string to camelCase
 * e.g., "zoomable-frame" -> "zoomableFrame"
 * e.g., "button-group-item" -> "buttonGroupItem"
 * Preserves strings without hyphens unchanged
 */
const toCamelCase = (str: string): string => {
  if (!str.includes("-")) {
    return str;
  }
  const parts = str.split("-");
  return parts[0] + parts.slice(1).map(part => 
    part.charAt(0).toUpperCase() + part.slice(1)
  ).join("");
};

export const previewTransformPlugin: Plugin<[PreviewTransformPluginOptions?], Root> = () => {
  return (tree, file) => {
    const filePath = file.path || file.history?.[0];
    if (!filePath) {
      console.warn("No file path available for preview transform plugin");
      return;
    }

    // Use file.cwd as the workspace root (current working directory)
    const workspaceRoot = file.cwd || process.cwd();

    // Get docs file path relative to workspace root
    const docsFilePath = normalizePath(relative(workspaceRoot, filePath));
    
    // Extract hierarchical path segments and convert to camelCase format
    // This matches the format used by millModulePlugin's getExampleBuildsPath
    const pathSegments = extractHierarchicalPathSegments(docsFilePath);
    const camelCaseSegments = pathSegments.map(toCamelCase);
    const prefix = camelCaseSegments.join("_");

    // Track nodes for transformation
    const previewNodes: Array<{
      node: Code;
      prefix: string;
      counter: number;
      parent: Parent;
      index: number;
    }> = [];
    
    // Counter for examples in this MDX file (starts at 1, must match millModulePlugin)
    let exampleCounter = 1;
    
    visit(tree, "code", (node, index, parent) => {
      if (node.lang && node.lang === "scala") {
        // Only process code blocks with "preview" or "examples" meta
        if (!node.meta?.includes("preview") && !node.meta?.includes("examples")) {
          return;
        }
        
        // Use sequential counter for this example (must match millModulePlugin order)
        const counter = exampleCounter++;
        
        // Store node information for transformation
        if (parent && typeof index === "number") {
          previewNodes.push({
            node,
            prefix,
            counter,
            parent: parent as Parent,
            index,
          });
        }
      }
    });

    // Transform nodes to Preview components
    // All examples from the same doc file share the same JS module
    // Read the JS file once (it's the same for all examples in this doc)
    const compiledJsPath = getCompiledJsPath(prefix, workspaceRoot);
    const jsContent = readCompiledJsFile(compiledJsPath);
    
    if (jsContent === null) {
      console.warn(`Compiled JS file not found at ${compiledJsPath}, skipping preview transformation`);
      return;
    }

    // Transform each preview node
    for (const { node, counter, parent, index } of previewNodes) {
      const exampleId = `example${counter}`;

      // Create MDX JSX element for Preview component
      const previewElement: MdxJsxFlowElement = {
        type: "mdxJsxFlowElement",
        name: "Preview",
        attributes: [
          {
            type: "mdxJsxAttribute",
            name: "code",
            value: jsContent,
          },
          {
            type: "mdxJsxAttribute",
            name: "userCode",
            value: node.value || "",
          },
          {
            type: "mdxJsxAttribute",
            name: "exampleId",
            value: exampleId,
          }
        ],
        children: [],
      };

      // Replace the code node with the Preview component
      parent.children[index] = previewElement;
    }
  };
};

