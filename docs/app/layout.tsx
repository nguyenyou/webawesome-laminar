import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  description: 'Laminar bindings for WebAwesome web components library',
  title: {
    template: '%s | WebAwesome Laminar',
    default: 'WebAwesome Laminar', // a default is required when creating a template
  },
}

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
