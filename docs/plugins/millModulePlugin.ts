import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import type { Root } from "mdast";
import { join, relative } from "path";
import { mkdirSync, writeFileSync, existsSync } from "fs";
import {
  normalizePath,
  extractHierarchicalPathSegments,
  type TemplateContext,
  type TemplateType,
  extractTemplateType,
  hasTemplateMeta,
} from "./previewUtils";
import { applyTemplateByType, toCamelCase } from "./templateProcessor";

/**
 * Convert an array of path segments to camelCase and join them with "/"
 * e.g., ["webawesome", "button-group"] -> "webawesome/buttonGroup"
 */
const joinHierarchicalPathCamelCase = (segments: string[]): string => {
  return segments.map(toCamelCase).join("/");
};

/**
 * Generate mill package name for a consolidated example module
 * e.g., ["webawesome", "button"] -> 'build.examples.webawesome.button'
 * Converts hyphenated segments to camelCase for valid Scala package names
 */
const getMillPackageName = (pathSegments: string[]): string => {
  const packageSegments = pathSegments.map(toCamelCase);
  const packagePath = packageSegments.join(".");
  return `build.docs.examples.${packagePath}`;
};

/**
 * Extract vertical flag from code block meta
 * Returns true if "vertical" meta is present, false otherwise
 */
const extractVerticalFlag = (meta: string | null | undefined): boolean => {
  if (!meta) {
    return false;
  }
  return meta.includes("vertical");
};

/**
 * Generate package.mill content for a Mill module
 */
const createPackageMillContent = (packageName: string): string => {
  return `package ${packageName}\n\nobject \`package\` extends build.ExampleModule\n`;
};

/**
 * Ensure parent modules exist for hierarchical structure
 * Creates nested directory structure and package.mill files at each level
 * Uses camelCase for both directory names and package names (per Mill convention)
 * e.g., examples/webawesome/buttonGroup/package.mill
 */
const ensureParentModules = (workspaceRoot: string, pathSegments: string[]): void => {
  const examplesPath = join(workspaceRoot, "examples");
  
  // Ensure root examples/package.mill exists
  const rootPackagePath = join(examplesPath, "package.mill");
  if (!existsSync(rootPackagePath)) {
    mkdirSync(examplesPath, { recursive: true });
    writeFileSync(rootPackagePath, createPackageMillContent("build.docs.examples"));
  }
  
  // Create nested directory structure and package.mill files for each level
  let currentPath = examplesPath;
  let packageName = "build.docs.examples";
  
  for (const segment of pathSegments) {
    // Convert segment to camelCase for directory name (matches package name per Mill convention)
    const camelCaseSegment = toCamelCase(segment);
    currentPath = join(currentPath, camelCaseSegment);
    // Use camelCase for package name (same as directory name)
    packageName = `${packageName}.${camelCaseSegment}`;
    
    // Ensure directory exists
    mkdirSync(currentPath, { recursive: true });
    
    // Create package.mill if it doesn't exist
    const packageMillPath = join(currentPath, "package.mill");
    if (!existsSync(packageMillPath)) {
      writeFileSync(packageMillPath, createPackageMillContent(packageName));
    }
  }
};

/**
 * Interface for collected example data
 */
interface ExampleData {
  counter: number;
  scalaCode: string;
  templateType: TemplateType;
  vertical: boolean;
}

/**
 * Generate a consolidated example module with package.mill and src/Main.scala
 * Contains all examples from a doc file as methods
 * Uses hierarchical directory structure: examples/{category}/{component}/
 */
const generateConsolidatedModule = (
  pathSegments: string[],
  examples: ExampleData[],
  workspaceRoot: string
): void => {
  // Ensure parent modules exist
  ensureParentModules(workspaceRoot, pathSegments);
  
  // Create hierarchical path: examples/webawesome/button
  // Use camelCase segments for directory names (matches package names per Mill convention)
  const hierarchicalPath = joinHierarchicalPathCamelCase(pathSegments);
  const moduleDir = join(workspaceRoot, "examples", hierarchicalPath);
  const srcDir = join(moduleDir, "src");
  const mainScalaPath = join(srcDir, "Main.scala");
  const packageMillPath = join(moduleDir, "package.mill");
  
  // Ensure directories exist
  mkdirSync(srcDir, { recursive: true });
  
  // Generate Main.scala with all example methods
  const packageSegments = pathSegments.map(toCamelCase);
  const packageName = `examples.${packageSegments.join(".")}`;
  
  // Collect all method definitions (imports are kept inside each method body)
  const methodDefinitions: string[] = [];
  const methodNames: string[] = [];
  
  for (const example of examples) {
    const templateContext: TemplateContext = {
      prefix: hierarchicalPath,
      counter: example.counter,
      exampleCode: example.scalaCode,
      vertical: example.vertical,
    };
    const methodSource = applyTemplateByType(example.templateType, templateContext);
    
    // Method source already contains just the method definition (no package declaration)
    methodDefinitions.push(methodSource.trim());
    
    // Collect method name for main method
    const methodName = `example${example.counter}`;
    methodNames.push(methodName);
  }
  
  // Generate main method that calls all example methods
  const mainMethodCalls = methodNames.map(name => `  ${name}()`).join('\n');
  const mainMethod = `@main
def app = {
${mainMethodCalls}
}`;
  
  // Combine into single Main.scala
  const scalaSource = `package ${packageName}

${mainMethod}

${methodDefinitions.join('\n\n')}
`;
  
  writeFileSync(mainScalaPath, scalaSource);
  
  // Generate package.mill
  const millPackageName = getMillPackageName(pathSegments);
  writeFileSync(packageMillPath, createPackageMillContent(millPackageName));
};

interface MillModulePluginOptions {}

export const millModulePlugin: Plugin<[MillModulePluginOptions?], Root> = () => {
  return (tree, file) => {
    const filePath = file.path || file.history?.[0];
    if (!filePath) {
      console.warn("No file path available for mill module plugin");
      return;
    }

    // Use file.cwd as the workspace root (current working directory)
    const workspaceRoot = file.cwd || process.cwd();

    // Get docs file path relative to workspace root
    const docsFilePath = normalizePath(relative(workspaceRoot, filePath));
    
    // Extract hierarchical path segments from doc file path
    const pathSegments = extractHierarchicalPathSegments(docsFilePath);
    
    // Collect all examples from this MDX file
    const examples: ExampleData[] = [];
    let exampleCounter = 1;
    
    visit(tree, "code", (node) => {
      if (node.lang && node.lang === "scala") {
        // Only process code blocks with template meta
        if (!hasTemplateMeta(node.meta)) {
          return;
        }
        
        // Extract template type from meta (defaults to "preview")
        const templateType = extractTemplateType(node.meta);
        
        // Extract vertical flag from meta
        const vertical = extractVerticalFlag(node.meta);
        
        // Use sequential counter for this example
        const counter = exampleCounter++;
        
        examples.push({
          counter,
          scalaCode: node.value || "",
          templateType,
          vertical,
        });
      }
    });
    
    // Generate single consolidated module if we have any examples
    if (examples.length > 0) {
      try {
        generateConsolidatedModule(pathSegments, examples, workspaceRoot);
      } catch (error) {
        console.error(`Failed to generate consolidated module:`, error);
      }
    }
  };
};

