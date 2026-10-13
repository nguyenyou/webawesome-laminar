import path from 'node:path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMdx from 'remark-mdx';
import { millModulePlugin } from './plugins/millModulePlugin';

const docsDir = import.meta.dir;
const processor = unified().use(remarkParse).use(remarkMdx).use(millModulePlugin);
const files = [...new Bun.Glob('content/docs/**/*.mdx').scanSync({ cwd: docsDir })].sort();

for (const relativePath of files) {
  const filePath = path.join(docsDir, relativePath);
  const content = await Bun.file(filePath).text();
  const file = { path: filePath, cwd: docsDir, value: content };
  await processor.run(processor.parse(file), file);
}

console.log(`Generated Scala example modules from ${files.length} documentation pages.`);
