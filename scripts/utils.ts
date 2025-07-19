import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const workspaceDir = path.resolve(__dirname, '..');

const workspacePkg = path.resolve(workspaceDir, 'package.json');

const webawesomeLaminarDir = path.resolve(workspaceDir, 'webawesome-laminar/src/io/github/nguyenyou/webawesome/laminar');

export function writeFile(filePath: string, content: string): Promise<void> {
    return fs.writeFile(filePath, content, { encoding: 'utf8' });
}

export function readFile(filePath: string): Promise<string> {
    return fs.readFile(filePath, { encoding: 'utf8' });
}