import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const workspaceDir = path.resolve(__dirname, '..');

const workspacePkg = path.resolve(workspaceDir, 'package.json');

const webawesomeLaminarDir = path.resolve(workspaceDir, 'webawesome-laminar/src/io/github/nguyenyou/webawesome/laminar');

// Enhanced file operations with better error handling
export async function writeFile(filePath: string, content: string): Promise<void> {
  try {
    // Ensure directory exists
    const dir = path.dirname(filePath);
    await ensureDir(dir);
    
    await fs.writeFile(filePath, content, { encoding: 'utf8' });
    logger.debug(`✓ Written file: ${filePath}`);
  } catch (error) {
    const errorMsg = `Failed to write file ${filePath}: ${error instanceof Error ? error.message : String(error)}`;
    logger.error(errorMsg);
    throw new Error(errorMsg);
  }
}

export async function readFile(filePath: string): Promise<string> {
  try {
    const content = await fs.readFile(filePath, { encoding: 'utf8' });
    logger.debug(`✓ Read file: ${filePath}`);
    return content;
  } catch (error) {
    const errorMsg = `Failed to read file ${filePath}: ${error instanceof Error ? error.message : String(error)}`;
    logger.error(errorMsg);
    throw new Error(errorMsg);
  }
}

export async function ensureDir(dirPath: string): Promise<void> {
  try {
    await fs.mkdir(dirPath, { recursive: true });
    logger.debug(`✓ Ensured directory: ${dirPath}`);
  } catch (error) {
    const errorMsg = `Failed to create directory ${dirPath}: ${error instanceof Error ? error.message : String(error)}`;
    logger.error(errorMsg);
    throw new Error(errorMsg);
  }
}

export function fileExists(filePath: string): boolean {
  return existsSync(filePath);
}

export async function deleteFile(filePath: string): Promise<void> {
  try {
    if (fileExists(filePath)) {
      await fs.unlink(filePath);
      logger.debug(`✓ Deleted file: ${filePath}`);
    }
  } catch (error) {
    const errorMsg = `Failed to delete file ${filePath}: ${error instanceof Error ? error.message : String(error)}`;
    logger.error(errorMsg);
    throw new Error(errorMsg);
  }
}

export async function copyFile(src: string, dest: string): Promise<void> {
  try {
    const destDir = path.dirname(dest);
    await ensureDir(destDir);
    await fs.copyFile(src, dest);
    logger.debug(`✓ Copied file: ${src} -> ${dest}`);
  } catch (error) {
    const errorMsg = `Failed to copy file ${src} to ${dest}: ${error instanceof Error ? error.message : String(error)}`;
    logger.error(errorMsg);
    throw new Error(errorMsg);
  }
}

// File checksum for version tracking
export async function getFileChecksum(filePath: string): Promise<string> {
  try {
    if (!fileExists(filePath)) {
      return '';
    }
    const content = await readFile(filePath);
    // Simple checksum using string length and content hash
    const hash = content.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    return `${content.length}-${Math.abs(hash).toString(16)}`;
  } catch (error) {
    logger.warn(`Could not compute checksum for ${filePath}: ${error}`);
    return '';
  }
}

// Enhanced logging system
interface Logger {
  debug(message: string): void;
  info(message: string): void;
  warn(message: string): void;
  error(message: string): void;
  success(message: string): void;
}

class ConsoleLogger implements Logger {
  private logLevel: 'debug' | 'info' | 'warn' | 'error';

  constructor(logLevel: 'debug' | 'info' | 'warn' | 'error' = 'info') {
    this.logLevel = logLevel;
  }

  debug(message: string): void {
    if (this.shouldLog('debug')) {
      console.log(`🔍 ${message}`);
    }
  }

  info(message: string): void {
    if (this.shouldLog('info')) {
      console.log(`ℹ️  ${message}`);
    }
  }

  warn(message: string): void {
    if (this.shouldLog('warn')) {
      console.warn(`⚠️  ${message}`);
    }
  }

  error(message: string): void {
    if (this.shouldLog('error')) {
      console.error(`❌ ${message}`);
    }
  }

  success(message: string): void {
    if (this.shouldLog('info')) {
      console.log(`✅ ${message}`);
    }
  }

  private shouldLog(level: string): boolean {
    const levels = ['debug', 'info', 'warn', 'error'];
    return levels.indexOf(level) >= levels.indexOf(this.logLevel);
  }
}

export const logger = new ConsoleLogger(process.env.LOG_LEVEL as any || 'info');

// Progress tracking
export class ProgressTracker {
  private current = 0;
  private total: number;
  private description: string;

  constructor(total: number, description: string = 'Processing') {
    this.total = total;
    this.description = description;
    this.logProgress();
  }

  increment(itemName?: string): void {
    this.current++;
    this.logProgress(itemName);
  }

  private logProgress(itemName?: string): void {
    const percentage = Math.round((this.current / this.total) * 100);
    const progress = `[${this.current}/${this.total}] ${percentage}%`;
    const message = itemName 
      ? `${this.description} ${progress}: ${itemName}`
      : `${this.description} ${progress}`;
    logger.info(message);
  }

  complete(): void {
    logger.success(`${this.description} completed: ${this.total} items processed`);
  }
}

// Validation helpers
export function validateJson(content: string, description: string = 'JSON'): any {
  try {
    return JSON.parse(content);
  } catch (error) {
    throw new Error(`Invalid ${description}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

export function validateRequired<T>(value: T | undefined | null, fieldName: string): T {
  if (value === undefined || value === null) {
    throw new Error(`Required field missing: ${fieldName}`);
  }
  return value;
}

// Network utilities for downloading files
export async function downloadFile(url: string, outputPath: string): Promise<void> {
  try {
    logger.info(`Downloading ${url} to ${outputPath}`);
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const content = await response.text();
    await writeFile(outputPath, content);
    logger.success(`Downloaded ${url} successfully`);
  } catch (error) {
    const errorMsg = `Failed to download ${url}: ${error instanceof Error ? error.message : String(error)}`;
    logger.error(errorMsg);
    throw new Error(errorMsg);
  }
}

// Path helpers
export const paths = {
  workspace: workspaceDir,
  scripts: __dirname,
  package: workspacePkg,
  laminarSrc: webawesomeLaminarDir,
  customElementsJson: path.join(workspaceDir, 'node_modules/@awesome.me/webawesome/dist/custom-elements.json'),
  customElementsJsonBackup: path.join(__dirname, 'custom-elements.json'), // Backup location
  ir: path.join(__dirname, 'webawesome-laminar-ir.json'),
  sharedTypesMapping: path.join(__dirname, 'shared-types-mapping.json'),
  generationSummary: path.join(__dirname, 'generation-summary.json'),
  sharedTypesScala: path.join(webawesomeLaminarDir, 'SharedTypes.scala'),
} as const;

// Version and metadata management
export interface GenerationMetadata {
  version: string;
  generated: string;
  source: {
    version: string;
    path: string;
    checksum: string;
  };
  components: {
    total: number;
    generated: number;
    errors: string[];
  };
}

export async function saveGenerationMetadata(metadata: GenerationMetadata): Promise<void> {
  const metadataPath = path.join(__dirname, 'generation-metadata.json');
  await writeFile(metadataPath, JSON.stringify(metadata, null, 2));
}

export async function loadGenerationMetadata(): Promise<GenerationMetadata | null> {
  const metadataPath = path.join(__dirname, 'generation-metadata.json');
  try {
    if (!fileExists(metadataPath)) {
      return null;
    }
    const content = await readFile(metadataPath);
    return JSON.parse(content);
  } catch (error) {
    logger.warn(`Could not load generation metadata: ${error}`);
    return null;
  }
}

// Error handling utilities
export class GenerationError extends Error {
  constructor(
    message: string,
    public readonly phase: string,
    public readonly component?: string,
    public readonly cause?: Error
  ) {
    super(message);
    this.name = 'GenerationError';
  }

  toString(): string {
    const base = `${this.name} in ${this.phase}${this.component ? ` (${this.component})` : ''}: ${this.message}`;
    return this.cause ? `${base}\nCaused by: ${this.cause.message}` : base;
  }
}

export async function withErrorContext<T>(
  phase: string,
  operation: () => Promise<T>,
  component?: string
): Promise<T> {
  try {
    return await operation();
  } catch (error) {
    throw new GenerationError(
      error instanceof Error ? error.message : String(error),
      phase,
      component,
      error instanceof Error ? error : undefined
    );
  }
}

// Package management utilities
export async function getWebAwesomeVersion(): Promise<string> {
  try {
    const packageContent = await readFile(paths.package);
    const packageJson = JSON.parse(packageContent);
    const version = packageJson.dependencies?.['@awesome.me/webawesome'];
    
    if (!version) {
      throw new Error('@awesome.me/webawesome not found in dependencies');
    }
    
    // Remove version range indicators (^, ~, etc.)
    return version.replace(/^[\^~>=<]/, '');
  } catch (error) {
    logger.error(`Could not determine WebAwesome version: ${error}`);
    throw error;
  }
}

export async function ensureWebAwesomeInstalled(): Promise<void> {
  if (!fileExists(paths.customElementsJson)) {
    throw new Error(`
WebAwesome package not found or not installed.
Please install it first: yarn add @awesome.me/webawesome

Expected file: ${paths.customElementsJson}
    `.trim());
  }
  
  logger.debug(`Found WebAwesome manifest at: ${paths.customElementsJson}`);
}