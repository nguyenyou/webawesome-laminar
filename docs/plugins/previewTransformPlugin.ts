import type { VFile } from "vfile";
import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import type { Code, Root, Parent } from "mdast";
import type { MdxJsxFlowElement } from "mdast-util-mdx-jsx";
import { relative, resolve, join } from "path";
import { existsSync } from "fs";
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

/**
 * Get the docs directory where examples-build is located
 * Tries multiple strategies to find the docs directory:
 * 1. Check if examples-build exists in current directory (if we're in docs/)
 * 2. Check if examples-build exists one level up (if running from workspace root)
 * 3. Use file path to infer docs directory
 * 4. Fall back to process.cwd()
 */
const getDocsDir = (file: VFile): string => {
  const cwd = process.cwd();
  
  // Check if examples-build exists in current directory (we're in docs/)
  const examplesBuildPath = join(cwd, "examples-build");
  if (existsSync(examplesBuildPath)) {
    return cwd;
  }

  // Check if examples-build exists one level up (we're at workspace root)
  const parentDir = resolve(cwd, "..");
  const parentExamplesBuildPath = join(parentDir, "examples-build");
  if (existsSync(parentExamplesBuildPath)) {
    return parentDir;
  }

  // Try to infer from file path
  const filePath = file.path || file.history?.[0];
  if (filePath) {
    // If file is in docs/content/docs/..., find the docs directory
    const normalizedPath = normalizePath(filePath);
    const docsIndex = normalizedPath.indexOf("/docs/");
    if (docsIndex !== -1) {
      // Extract everything up to and including "/docs"
      const docsDirPath = normalizedPath.substring(0, docsIndex + "/docs".length);
      const docsDir = resolve(docsDirPath);
      const docsExamplesBuildPath = join(docsDir, "examples-build");
      if (existsSync(docsExamplesBuildPath)) {
        return docsDir;
      }
    }
  }

  // Fall back to cwd (might not have examples-build yet, but that's okay)
  return cwd;
};

export const previewTransformPlugin: Plugin<[PreviewTransformPluginOptions?], Root> = () => {
  return (tree, file) => {
    const filePath = file.path || file.history?.[0];
    if (!filePath) {
      console.warn("No file path available for preview transform plugin");
      return;
    }

    // Get docs directory where examples-build is located
    const docsDir = getDocsDir(file);

    // Use the same workspace root logic as millModulePlugin for consistency
    // This ensures we extract path segments the same way
    const workspaceRoot = file.cwd || process.cwd();

    // Get docs file path relative to workspace root (same as millModulePlugin)
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
    const compiledJsPath = getCompiledJsPath(prefix, docsDir);
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

