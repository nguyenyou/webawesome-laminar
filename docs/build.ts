import path from 'path';
import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import * as esbuild from 'esbuild';
import { build as rolldownBuild } from 'rolldown';

/**
 * Default bundler to use when BUNDLER environment variable is not set or invalid
 * Valid values: 'bun', 'esbuild', 'rolldown'
 */
const DEFAULT_BUNDLER: 'bun' | 'esbuild' | 'rolldown' = 'rolldown';

interface ModuleEntry {
  entrypoint: string; // Absolute path to mill build output main.js
  outputPath: string; // Absolute path to examples-build output
  pathSegments: string[]; // Path segments for this module (e.g., ["webawesome", "button"])
}

/**
 * Discover modules by scanning the filesystem
 * Scans out/docs/examples/ directory recursively to find all fullLinkJS.dest/main.js files
 * Each module corresponds to a doc file and contains multiple example methods
 */
function discoverModules(workspaceRoot: string, docsDir: string): ModuleEntry[] {
  const modules: ModuleEntry[] = [];
  const outExamplesPath = path.join(workspaceRoot, 'out', 'docs', 'examples');

  if (!existsSync(outExamplesPath)) {
    return modules;
  }

  /**
   * Recursively scan directory for module directories
   * A module is identified by having a fullLinkJS.dest/main.js file directly in it
   */
  function scanDirectory(dirPath: string, pathSegments: string[]): void {
    if (!existsSync(dirPath)) {
      return;
    }

    try {
      const entries = readdirSync(dirPath, { withFileTypes: true });
      
      // Check if this directory itself contains a main.js (it's a module)
      const mainJsPath = path.join(dirPath, 'fullLinkJS.dest', 'main.js');
      if (existsSync(mainJsPath)) {
        // This is a module directory
        // Derive output path: docs/examples-build/{category}_{component}.js
        const camelCaseSegments = pathSegments.map(segment => segment); // Already camelCase from directory names
        const flattenedPrefix = camelCaseSegments.join('_');
        const outputPath = path.join(
          docsDir,
          'examples-build',
          `${flattenedPrefix}.js`
        );

        modules.push({
          entrypoint: mainJsPath,
          outputPath,
          pathSegments: [...pathSegments],
        });
        return; // Don't scan deeper, this is a module
      }

      // Otherwise, scan subdirectories
      for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);

        // Skip example{N} directories (old structure, should not exist anymore)
        const exampleMatch = entry.name.match(/^example(\d+)$/);
        if (entry.isDirectory() && !exampleMatch) {
          // Recursively scan subdirectories
          scanDirectory(fullPath, [...pathSegments, entry.name]);
        }
      }
    } catch (error) {
      console.warn(`Failed to scan directory ${dirPath}:`, error);
    }
  }

  scanDirectory(outExamplesPath, []);
  return modules;
}

/**
 * Format duration in milliseconds to a human-readable string
 * @param durationMs Duration in milliseconds
 * @returns Formatted string like "0.5 seconds" or "2.3 seconds"
 */
function formatDuration(durationMs: number): string {
  const seconds = durationMs / 1000;
  return `${seconds.toFixed(1)} seconds`;
}

/**
 * Bundler type - function that bundles an entrypoint to an output path
 */
type BundlerFunction = (entrypoint: string, outputPath: string) => Promise<void>;

/**
 * Build using Bun bundler
 */
async function buildWithBun(entrypoint: string, outputPath: string): Promise<void> {
  const result = await Bun.build({
    entrypoints: [entrypoint],
    target: 'browser',
    format: 'esm',
    minify: true,
  });

  if (!result.success) {
    throw new Error(`Build failed for ${entrypoint}: ${JSON.stringify(result.logs)}`);
  }

  if (result.outputs.length === 0) {
    throw new Error(`No output generated for ${entrypoint}`);
  }

  await Bun.write(outputPath, result.outputs[0]);
}

/**
 * Build using esbuild bundler
 */
async function buildWithEsbuild(entrypoint: string, outputPath: string): Promise<void> {
  const result = await esbuild.build({
    entryPoints: [entrypoint],
    bundle: true,
    target: 'es2020', // Browser-compatible target (esbuild doesn't have 'browser' like bun)
    format: 'esm',
    minify: true,
    outfile: outputPath, // Used for output structure, but we write manually
    write: false, // We'll write manually
  });

  if (result.errors.length > 0) {
    throw new Error(`Build failed for ${entrypoint}: ${JSON.stringify(result.errors)}`);
  }

  if (result.outputFiles.length === 0) {
    throw new Error(`No output generated for ${entrypoint}`);
  }

  // Write the bundled output to the specified output path
  writeFileSync(outputPath, result.outputFiles[0].contents);
}

/**
 * Build using rolldown bundler
 */
async function buildWithRolldown(entrypoint: string, outputPath: string): Promise<void> {
  await rolldownBuild({
    input: entrypoint,
    output: {
      file: outputPath,
      format: 'esm',
      minify: true,
      inlineDynamicImports: true, // Required when using output.file with dynamic imports
    },
  });
}

/**
 * Get the bundler function based on BUNDLER environment variable
 * Defaults to DEFAULT_BUNDLER constant if not set or invalid value
 */
function getBundler(): BundlerFunction {
  const bundlerEnv = process.env.BUNDLER?.toLowerCase();
  
  switch (bundlerEnv) {
    case 'esbuild':
      return buildWithEsbuild;
    case 'rolldown':
      return buildWithRolldown;
    case 'bun':
      return buildWithBun;
    default:
      // Default to DEFAULT_BUNDLER (handles invalid values)
      if (bundlerEnv && bundlerEnv !== DEFAULT_BUNDLER) {
        console.warn(`Invalid BUNDLER value "${process.env.BUNDLER}", defaulting to '${DEFAULT_BUNDLER}'`);
      }
      
      // Return the default bundler based on DEFAULT_BUNDLER constant
      switch (DEFAULT_BUNDLER) {
        case 'esbuild':
          return buildWithEsbuild;
        case 'rolldown':
          return buildWithRolldown;
        case 'bun':
        default:
          return buildWithBun;
      }
  }
}

async function main() {
  // Get the project root by going up one level from the docs directory
  const currentFileDir = path.dirname(fileURLToPath(import.meta.url));
  const docsDir = currentFileDir; // docs/ directory
  const workspaceRoot = path.resolve(currentFileDir, '..');

  // Discover modules by scanning filesystem
  const modules = discoverModules(workspaceRoot, docsDir);

  if (modules.length === 0) {
    console.log('No modules found to build. Run mill build first to generate module outputs.');
    return;
  }

  // Select bundler based on environment variable
  const bundler = getBundler();
  const bundlerEnv = process.env.BUNDLER?.toLowerCase();
  let bundlerName: string;
  switch (bundlerEnv) {
    case 'esbuild':
    case 'rolldown':
    case 'bun':
      bundlerName = bundlerEnv;
      break;
    default:
      bundlerName = DEFAULT_BUNDLER;
      break;
  }
  console.log(`Using bundler: ${bundlerName}`);

  try {
    // Ensure output directory exists for all modules (inside docs folder)
    const outputDir = path.join(docsDir, 'examples-build');
    if (!existsSync(outputDir)) {
      mkdirSync(outputDir, { recursive: true });
    }

    // Start timing
    const startTime = performance.now();
    const fileCount = modules.length;
    let completedCount = 0;

    // Build all modules in parallel
    const buildPromises = modules.map(async (module, index) => {
      await bundler(module.entrypoint, module.outputPath);
      
      // Update and log progress (increment happens atomically in single-threaded JS)
      completedCount++;
      const progressMsg = `[${completedCount}/${fileCount}] Bundling...`;
      process.stdout.write(`\r${progressMsg.padEnd(50)}`);
    });

    // Wait for all builds to complete
    await Promise.all(buildPromises);
    
    // Clear the progress line and move to next line
    process.stdout.write('\r' + ' '.repeat(50) + '\r');

    // Calculate and display timing
    const endTime = performance.now();
    const durationMs = endTime - startTime;
    const durationStr = formatDuration(durationMs);
    
    console.log(`Bundled ${fileCount} modules in ${durationStr}`);
  } catch (error) {
    console.error('Error building modules:', error);
    return;
  }
}

main().catch(console.error);
