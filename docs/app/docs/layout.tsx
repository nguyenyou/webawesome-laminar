import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions, linkItems } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout links={linkItems} tree={source.pageTree} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}
