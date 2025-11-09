import { join } from "path";
import { existsSync, readFileSync } from "fs";
import { createHash } from "crypto";

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
 * Returns an array of path segments representing the hierarchy
 */
export const extractHierarchicalPathSegments = (docPath: string): string[] => {
  let path = normalizePath(docPath);
  
  // Remove content/docs/ prefix if present
  if (path.startsWith("content/docs/")) {
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
 * e.g., examples-build/webawesome_button.js
 */
export const getCompiledJsPath = (
  prefix: string,
  workspaceRoot: string
): string => {
  return join(workspaceRoot, "examples-build", `${prefix}.js`);
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
  userCode: string;
}

