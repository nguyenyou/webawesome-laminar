import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { Preview } from './components/Preview';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { File, Folder, Files } from 'fumadocs-ui/components/files';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    Preview: Preview,
    Tab: Tab,
    Tabs: Tabs,
    File: File,
    Folder: Folder,
    Files: Files,
  };
}
