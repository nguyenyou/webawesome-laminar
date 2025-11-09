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
  hasTemplateMeta,
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
 * Parse Tailwind height class from code block meta string
 * Looks for Tailwind height classes starting with "h-" (e.g., h-[400px], h-full, h-screen)
 * e.g., "preview h-[400px]" -> "h-[400px]"
 * e.g., "preview h-full examples" -> "h-full"
 * Returns undefined if height class is not found or meta is null/undefined
 */
const parseHeightFromMeta = (meta: string | null | undefined): string | undefined => {
  if (!meta) {
    return undefined;
  }
  
  // Match Tailwind height class pattern (h- followed by any non-whitespace characters)
  // This matches classes like h-full, h-screen, h-[400px], h-[calc(100vh-2rem)], etc.
  const heightMatch = meta.match(/\bh-[^\s]+/);
  return heightMatch ? heightMatch[0] : undefined;
};

/**
 * Parse Tailwind padding class from code block meta string
 * Looks for Tailwind padding classes (p-, px-, py-, pt-, pb-, pl-, pr-)
 * e.g., "preview p-4" -> "p-4"
 * e.g., "preview px-4 py-2" -> "px-4" (returns first match)
 * e.g., "preview p-[20px]" -> "p-[20px]"
 * Returns undefined if padding class is not found or meta is null/undefined
 */
const parsePaddingFromMeta = (meta: string | null | undefined): string | undefined => {
  if (!meta) {
    return undefined;
  }
  
  // Match Tailwind padding class pattern (p, px, py, pt, pb, pl, or pr followed by - and any non-whitespace characters)
  // This matches classes like p-4, px-4, py-2, pt-8, pb-4, pl-6, pr-6, p-[20px], etc.
  const paddingMatch = meta.match(/\b(p|px|py|pt|pb|pl|pr)-[^\s]+/);
  return paddingMatch ? paddingMatch[0] : undefined;
};

/**
 * Parse forId attribute from code block meta string
 * Extracts forId="value" or forId='value' from meta
 * e.g., 'css forId="animations-easings"' -> "animations-easings"
 * e.g., "css forId='my-id'" -> "my-id"
 * Returns undefined if forId is not found or meta is null/undefined
 */
const parseForIdFromMeta = (meta: string | null | undefined): string | undefined => {
  if (!meta) {
    return undefined;
  }
  
  // Match forId="value" or forId='value' pattern
  // Supports both single and double quotes
  const forIdMatch = meta.match(/\bforId=["']([^"']+)["']/);
  return forIdMatch ? forIdMatch[1] : undefined;
};

/**
 * Parse id attribute from code block meta string
 * Extracts id="value" or id='value' from meta
 * e.g., 'scala preview id="animations-easings"' -> "animations-easings"
 * e.g., "scala preview id='my-id'" -> "my-id"
 * Returns undefined if id is not found or meta is null/undefined
 */
const parseIdFromMeta = (meta: string | null | undefined): string | undefined => {
  if (!meta) {
    return undefined;
  }
  
  // Match id="value" or id='value' pattern
  // Supports both single and double quotes
  const idMatch = meta.match(/\bid=["']([^"']+)["']/);
  return idMatch ? idMatch[1] : undefined;
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

    // Early exit: Check if there are any scala code blocks with template meta
    let hasPreviewOrExamples = false;
    visit(tree, "code", (node) => {
      if (node.lang === "scala" && hasTemplateMeta(node.meta)) {
        hasPreviewOrExamples = true;
      }
    });

    // Skip processing entirely if no matching code blocks found
    if (!hasPreviewOrExamples) {
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

    // Single pass: Collect CSS blocks with forId meta attribute and Scala preview nodes
    // Map CSS content by forId value for later matching with Preview components
    const cssByForId = new Map<string, string>();
    
    // Track CSS nodes with forId that should be replaced with empty div nodes
    const cssNodesToReplace: Array<{
      parent: Parent;
      index: number;
    }> = [];
    
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
      // Collect CSS blocks with forId meta attribute
      if (node.lang === "css") {
        const forId = parseForIdFromMeta(node.meta);
        if (forId && node.value) {
          cssByForId.set(forId, node.value);
          // Mark this CSS node for replacement with empty div since it's only used to pass CSS to Preview
          if (parent && typeof index === "number") {
            cssNodesToReplace.push({
              parent: parent as Parent,
              index,
            });
          }
        }
        return;
      }
      
      // Collect Scala preview/examples/example code blocks
      if (node.lang === "scala") {
        // Only process code blocks with template meta
        if (!hasTemplateMeta(node.meta)) {
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

    // Replace CSS nodes with forId with empty div nodes
    // Sort by index in descending order to avoid index shifting when replacing
    cssNodesToReplace.sort((a, b) => b.index - a.index);
    for (const { parent, index } of cssNodesToReplace) {
      const emptyDivElement: MdxJsxFlowElement = {
        type: "mdxJsxFlowElement",
        name: "div",
        attributes: [],
        children: [],
      };
      parent.children[index] = emptyDivElement;
    }

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
      const height = parseHeightFromMeta(node.meta);
      const padding = parsePaddingFromMeta(node.meta);
      const previewId = parseIdFromMeta(node.meta);
      
      // Look up matching CSS content if id is specified
      const cssContent = previewId ? cssByForId.get(previewId) : undefined;

      // Create MDX JSX element for Preview component
      const attributes: MdxJsxFlowElement["attributes"] = [
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
      ];

      // Add height attribute if height value is found
      if (height) {
        attributes.push({
          type: "mdxJsxAttribute",
          name: "height",
          value: height,
        });
      }

      // Add padding attribute if padding value is found
      if (padding) {
        attributes.push({
          type: "mdxJsxAttribute",
          name: "padding",
          value: padding,
        });
      }

      // Add css attribute if matching CSS content is found
      if (cssContent) {
        attributes.push({
          type: "mdxJsxAttribute",
          name: "css",
          value: cssContent,
        });
      }

      const previewElement: MdxJsxFlowElement = {
        type: "mdxJsxFlowElement",
        name: "Preview",
        attributes,
        children: [],
      };

      // Replace the code node with the Preview component
      parent.children[index] = previewElement;
    }
  };
};

