import { 
  logger, 
  ProgressTracker, 
  paths, 
  fileExists, 
  getFileChecksum,
  loadGenerationMetadata,
  saveGenerationMetadata,
  GenerationError,
  withErrorContext,
  getWebAwesomeVersion,
  ensureWebAwesomeInstalled,
  type GenerationMetadata 
} from './utils.js';

interface GenerationOptions {
  force?: boolean;          // Force regeneration even if no changes
  verbose?: boolean;        // Enable debug logging
  validate?: boolean;       // Validate generated files
}

interface GenerationResult {
  success: boolean;
  componentsGenerated: number;
  errors: string[];
  duration: number;
  skipped: boolean;
}

// No longer needed - we read from node_modules
// const WEBAWESOME_MANIFEST_URL = 'https://cdn.jsdelivr.net/npm/@awesome.me/webawesome@latest/dist/custom-elements.json';

export class WebAwesomeGenerator {
  private options: GenerationOptions;
  private startTime: number = 0;
  private errors: string[] = [];

  constructor(options: GenerationOptions = {}) {
    this.options = options;
    if (options.verbose) {
      process.env.LOG_LEVEL = 'debug';
    }
  }

  async generate(): Promise<GenerationResult> {
    this.startTime = Date.now();
    this.errors = [];

    try {
      logger.info('🚀 Starting WebAwesome Laminar component generation');
      
      // Step 1: Check if regeneration is needed
      if (!this.options.force && await this.shouldSkipGeneration()) {
        logger.info('📋 No changes detected, skipping generation');
        return {
          success: true,
          componentsGenerated: 0,
          errors: [],
          duration: Date.now() - this.startTime,
          skipped: true
        };
      }

      // Step 2: Ensure WebAwesome is installed and validate manifest
      await this.ensureWebAwesome();

      // Step 3: Generate IR from manifest
      const irStats = await this.generateIR();
      
      // Step 4: Extract shared types
      await this.extractSharedTypes();
      
      // Step 5: Generate component files
      const componentsGenerated = await this.generateComponents();
      
      // Step 6: Validate generated files (optional)
      if (this.options.validate) {
        await this.validateGeneration();
      }
      
      // Step 7: Save generation metadata
      await this.saveMetadata(componentsGenerated);
      
      const duration = Date.now() - this.startTime;
      logger.success(`🎉 Generation completed successfully in ${duration}ms`);
      logger.info(`📊 Generated ${componentsGenerated} components with ${this.errors.length} errors`);
      
      return {
        success: true,
        componentsGenerated,
        errors: this.errors,
        duration,
        skipped: false
      };

    } catch (error) {
      const duration = Date.now() - this.startTime;
      logger.error(`💥 Generation failed after ${duration}ms`);
      
      if (error instanceof GenerationError) {
        logger.error(error.toString());
      } else {
        logger.error(`Unexpected error: ${error instanceof Error ? error.message : String(error)}`);
      }
      
      return {
        success: false,
        componentsGenerated: 0,
        errors: [error instanceof Error ? error.message : String(error)],
        duration,
        skipped: false
      };
    }
  }

  private async shouldSkipGeneration(): Promise<boolean> {
    try {
      const metadata = await loadGenerationMetadata();
      if (!metadata) {
        logger.debug('No previous generation metadata found');
        return false;
      }

      // Check if WebAwesome version has changed
      const currentVersion = await getWebAwesomeVersion();
      if (currentVersion !== metadata.source.version) {
        logger.debug(`WebAwesome version changed: ${metadata.source.version} -> ${currentVersion}`);
        return false;
      }

      // Check if custom-elements.json has changed
      const currentChecksum = await getFileChecksum(paths.customElementsJson);
      if (currentChecksum !== metadata.source.checksum) {
        logger.debug('Source manifest has changed');
        return false;
      }

      // Check if all expected files exist
      const expectedFiles = [
        paths.ir,
        paths.sharedTypesMapping,
        paths.sharedTypesScala,
        paths.generationSummary
      ];

      for (const file of expectedFiles) {
        if (!fileExists(file)) {
          logger.debug(`Missing expected file: ${file}`);
          return false;
        }
      }

      logger.debug(`All files are up to date (WebAwesome v${currentVersion})`);
      return true;
    } catch (error) {
      logger.warn(`Error checking generation status: ${error}`);
      return false;
    }
  }

  private async ensureWebAwesome(): Promise<void> {
    await withErrorContext('webawesome-validation', async () => {
      // Ensure WebAwesome is installed
      await ensureWebAwesomeInstalled();
      
      // Get the installed version
      const version = await getWebAwesomeVersion();
      logger.info(`📦 Using WebAwesome v${version} from node_modules`);

      // Validate the manifest file
      const { readFile, validateJson } = await import('./utils.js');
      const manifestContent = await readFile(paths.customElementsJson);
      const manifest = validateJson(manifestContent, 'custom-elements.json');
      
      if (!manifest.modules || !Array.isArray(manifest.modules)) {
        throw new Error('Invalid manifest: missing or invalid modules array');
      }
      
      logger.success(`✅ Manifest loaded with ${manifest.modules.length} modules`);
      
      // Create backup copy for debugging
      const { copyFile } = await import('./utils.js');
      await copyFile(paths.customElementsJson, paths.customElementsJsonBackup);
      logger.debug(`📋 Backup created at: ${paths.customElementsJsonBackup}`);
    });
  }

  private async generateIR(): Promise<{ components: number }> {
    return await withErrorContext('ir-generation', async () => {
      logger.info('🔄 Generating Intermediate Representation...');
      
      // Use a cache-busting query parameter for fresh imports
      const timestamp = Date.now();
      const { generateIR } = await import(`./gen-ir.js?t=${timestamp}`);
      
      const stats = await generateIR();
      logger.success(`✅ IR generated with ${stats.components} components`);
      return stats;
    });
  }

  private async extractSharedTypes(): Promise<void> {
    await withErrorContext('shared-types-extraction', async () => {
      logger.info('🔄 Extracting shared types...');
      
      const timestamp = Date.now();
      const { extractSharedTypes } = await import(`./extract-shared-types.js?t=${timestamp}`);
      
      await extractSharedTypes();
      logger.success('✅ Shared types extracted');
    });
  }

  private async generateComponents(): Promise<number> {
    return await withErrorContext('component-generation', async () => {
      logger.info('🔄 Generating component files...');
      
      const timestamp = Date.now();
      const { generateAllComponents } = await import(`./generate-components.js?t=${timestamp}`);
      
      const result = await generateAllComponents();
      logger.success(`✅ Generated ${result.componentsGenerated} component files`);
      return result.componentsGenerated;
    });
  }

  private async validateGeneration(): Promise<void> {
    await withErrorContext('validation', async () => {
      logger.info('🔍 Validating generated files...');
      
      const { readFile, validateJson } = await import('./utils.js');
      
      // Validate IR file
      const irContent = await readFile(paths.ir);
      const ir = validateJson(irContent, 'IR file');
      
      if (!ir.components || !Array.isArray(ir.components)) {
        throw new Error('Invalid IR: missing components array');
      }
      
      // Validate shared types file exists and has content
      if (!fileExists(paths.sharedTypesScala)) {
        throw new Error('SharedTypes.scala file missing');
      }
      
      const sharedTypesContent = await readFile(paths.sharedTypesScala);
      if (sharedTypesContent.length < 100) {
        throw new Error('SharedTypes.scala appears to be empty or incomplete');
      }
      
      // Validate that component files were generated
      const { readFile: readFileUtil, validateJson: validateJsonUtil } = await import('./utils.js');
      const summaryContent = await readFileUtil(paths.generationSummary);
      const summary = validateJsonUtil(summaryContent, 'generation summary');
      
      if (summary.totalComponents === 0) {
        throw new Error('No components were generated');
      }
      
      logger.success(`✅ Validation passed: ${summary.totalComponents} components validated`);
    });
  }

  private async saveMetadata(componentsGenerated: number): Promise<void> {
    await withErrorContext('metadata-save', async () => {
      const checksum = await getFileChecksum(paths.customElementsJson);
      const version = await getWebAwesomeVersion();
      
      const metadata: GenerationMetadata = {
        version: '1.0.0',
        generated: new Date().toISOString(),
        source: {
          version,
          path: paths.customElementsJson,
          checksum
        },
        components: {
          total: componentsGenerated,
          generated: componentsGenerated,
          errors: this.errors
        }
      };

      await saveGenerationMetadata(metadata);
      logger.debug('📊 Generation metadata saved');
    });
  }
}

// Export for use as a module
export async function generateWebAwesome(options: GenerationOptions = {}): Promise<GenerationResult> {
  const generator = new WebAwesomeGenerator(options);
  return await generator.generate();
}

// CLI entry point
async function main() {
  const args = process.argv.slice(2);
  const options: GenerationOptions = {
    force: args.includes('--force') || args.includes('-f'),
    verbose: args.includes('--verbose') || args.includes('-v'),
    validate: args.includes('--validate')
  };

  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
WebAwesome Laminar Generator

Usage: npm run generate [options]

Options:
  --force, -f          Force regeneration even if no changes detected
  --verbose, -v        Enable verbose logging
  --validate           Validate generated files after generation
  --help, -h           Show this help message

Examples:
  npm run generate                    # Normal generation
  npm run generate --force            # Force regeneration
  npm run generate --verbose          # Verbose output
  npm run generate --validate         # With validation

Note: The generator uses the WebAwesome version specified in package.json.
Update package.json to use a different version.
`);
    process.exit(0);
  }

  try {
    const result = await generateWebAwesome(options);
    
    if (result.success) {
      if (result.skipped) {
        logger.info('🚀 Generation skipped - everything up to date');
      } else {
        logger.success(`🎉 Successfully generated ${result.componentsGenerated} components`);
      }
      process.exit(0);
    } else {
      logger.error('💥 Generation failed');
      result.errors.forEach(error => logger.error(`  ${error}`));
      process.exit(1);
    }
  } catch (error) {
    logger.error(`Fatal error: ${error instanceof Error ? error.message : String(error)}`);
    process.exit(1);
  }
}

// Run CLI if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
} 