import { join } from "path";
import { existsSync, readFileSync } from "fs";
import { createHash } from "crypto";
import { BUILD_OUTPUT_DIR } from "../buildConfig";

/**
 * Normalize path separators to forward slashes
 */
export const normalizePath = (path: string | null | undefined): string => {
  if (!path) return "";
  return path.replace(/\\/g, "/");
};

/**
 * Extract hierarchical path segments from doc file path
 * e.g., content/docs/webawesome/button.mdx -> ["webawesome", "button"]
 * e.g., docs/content/docs/index.mdx -> ["index"]
 * Returns an array of path segments representing the hierarchy
 */
export const extractHierarchicalPathSegments = (docPath: string): string[] => {
  let path = normalizePath(docPath);
  
  // Remove docs/content/docs/ prefix if present (when relative to workspace root)
  if (path.startsWith("docs/content/docs/")) {
    path = path.substring("docs/content/docs/".length);
  }
  // Remove content/docs/ prefix if present (when relative to docs directory)
  else if (path.startsWith("content/docs/")) {
    path = path.substring("content/docs/".length);
  }
  
  // Remove .mdx extension
  if (path.endsWith(".mdx")) {
    path = path.substring(0, path.length - 4);
  }
  
  // Split by path separators
  const segments = path.split("/").filter(segment => segment.length > 0);
  
  // Sanitize each segment: remove invalid characters for directory names
  // Keep only alphanumeric, underscores, and hyphens
  const sanitizedSegments = segments.map(segment => {
    let sanitized = segment.replace(/[^a-zA-Z0-9_-]/g, "_");
    // Remove consecutive underscores
    sanitized = sanitized.replace(/_+/g, "_");
    // Remove leading/trailing underscores
    sanitized = sanitized.replace(/^_+|_+$/g, "");
    return sanitized || "example"; // Fallback to "example" if empty
  });
  
  return sanitizedSegments.length > 0 ? sanitizedSegments : ["example"];
};

/**
 * Get the built JavaScript file path for a module
 * e.g., docs/{BUILD_OUTPUT_DIR}/webawesome_button.js
 */
export const getCompiledJsPath = (
  prefix: string,
  docsDir: string
): string => {
  return join(docsDir, BUILD_OUTPUT_DIR, `${prefix}.js`);
};

/**
 * Read built JavaScript file content
 * Returns null if file doesn't exist or can't be read
 */
export const readCompiledJsFile = (filePath: string): string | null => {
  try {
    if (!existsSync(filePath)) {
      return null;
    }
    return readFileSync(filePath, "utf-8");
  } catch (error) {
    console.warn(`Failed to read compiled JS file at ${filePath}:`, error);
    return null;
  }
};

export interface TemplateContext {
  prefix: string;
  counter: number;
  exampleCode: string;
  vertical?: boolean;
}

/**
 * Template type union for all supported template types
 */
export type TemplateType = "preview" | "examples" | "example";

/**
 * Template configuration mapping meta strings to template types
 * Keys are the meta strings that trigger template transformation
 * Values are the corresponding template types
 * 
 * Order matters: longer strings should come first to avoid substring matching issues
 * (e.g., "examples" must come before "example")
 */
export const TEMPLATE_CONFIG: Record<string, TemplateType> = {
  examples: "examples",
  example: "example",
  preview: "preview",
};

/**
 * Get all template meta strings, sorted by length (longest first)
 * This ensures we check longer strings before shorter ones to avoid substring matching issues
 */
const getTemplateMetaStrings = (): string[] => {
  return Object.keys(TEMPLATE_CONFIG).sort((a, b) => b.length - a.length);
};

/**
 * Check if a meta string contains any template keyword
 * @param meta - The meta string to check (can be null or undefined)
 * @returns true if meta contains any template keyword, false otherwise
 */
export const hasTemplateMeta = (meta: string | null | undefined): boolean => {
  if (!meta) {
    return false;
  }
  
  const templateMetaStrings = getTemplateMetaStrings();
  return templateMetaStrings.some(keyword => meta.includes(keyword));
};

/**
 * Extract template type from code block meta string
 * Checks longer strings first to avoid substring matching issues
 * (e.g., "examples" is checked before "example")
 * 
 * @param meta - The meta string to extract template type from (can be null or undefined)
 * @returns The template type, defaults to "preview" if no template keyword is found
 */
export const extractTemplateType = (meta: string | null | undefined): TemplateType => {
  if (!meta) {
    return "preview";
  }
  
  // Check longer strings first to avoid substring matching issues
  const templateMetaStrings = getTemplateMetaStrings();
  
  for (const keyword of templateMetaStrings) {
    if (meta.includes(keyword)) {
      return TEMPLATE_CONFIG[keyword];
    }
  }
  
  // Default to "preview" if no template keyword is found
  return "preview";
};

