"use client";
import { useEffect, RefObject } from "react";

// Helper function to get CSS variable value for background color
export const getBackgroundColor = (): string => {
  if (typeof window === 'undefined') return '';
  
  // Get the CSS variable value from the root element
  const root = document.documentElement;
  const value = window.getComputedStyle(root).getPropertyValue('--color-fd-article').trim();
  
  return value || '';
};

// Helper function to get CSS variable value for foreground color
export const getForegroundColor = (): string => {
  if (typeof window === 'undefined') return '';
  
  // Get the CSS variable value from the root element
  const root = document.documentElement;
  const value = window.getComputedStyle(root).getPropertyValue('--color-fd-foreground').trim();
  
  return value || '';
};

// Resolve theme from 'system' to 'dark' or 'light'
const resolveTheme = (theme: string | undefined): 'dark' | 'light' => {
  if (theme === 'system' || !theme) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return theme === 'dark' ? 'dark' : 'light';
};

// Custom hook to sync theme updates to iframe
export const useIframeThemeSync = (
  iframeRef: RefObject<HTMLIFrameElement | null>,
  theme: string | undefined
) => {
  useEffect(() => {
    // Skip if theme is not yet resolved (during hydration)
    if (!theme) return;
    
    // Wait a bit to ensure iframe is ready
    const timeoutId = setTimeout(() => {
      if (!iframeRef.current?.contentWindow) return;
      
      const iframe = iframeRef.current;
      const resolvedTheme = resolveTheme(theme);
      
      const backgroundColor = getBackgroundColor();
      const foregroundColor = getForegroundColor();
      
      iframe.contentWindow?.postMessage(
        { type: 'theme-update', theme: resolvedTheme },
        '*'
      );
      
      if (backgroundColor) {
        iframe.contentWindow?.postMessage(
          { type: 'background-update', backgroundColor },
          '*'
        );
      }
      
      if (foregroundColor) {
        iframe.contentWindow?.postMessage(
          { type: 'foreground-update', foregroundColor },
          '*'
        );
      }
    }, 100);
    
    return () => clearTimeout(timeoutId);
  }, [theme, iframeRef]);
};

// Apply initial theme and colors to iframe document
export const applyInitialTheme = (
  doc: Document,
  theme: string | undefined
) => {
  // Apply initial theme
  const resolvedTheme = resolveTheme(theme);
  
  if (resolvedTheme === 'dark') {
    doc.documentElement.classList.add('wa-dark');
  } else {
    doc.documentElement.classList.remove('wa-dark');
  }
  
  // Apply initial background color
  const backgroundColor = getBackgroundColor();
  if (backgroundColor) {
    doc.body.style.backgroundColor = backgroundColor;
  }
  
  // Apply initial foreground color
  const foregroundColor = getForegroundColor();
  if (foregroundColor) {
    doc.body.style.color = foregroundColor;
  }
};

// Create srcDoc HTML template
export const createSrcDoc = ({
  exampleId,
  code,
  css,
  padding,
  align,
}: {
  exampleId: string;
  code: string;
  css?: string;
  padding?: string;
  align?: string;
}): string => {
  return `<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="//cdn.jsdelivr.net/npm/@awesome.me/webawesome@3.0.0/dist-cdn/styles/themes/default.min.css" rel="stylesheet" />
<base target=_blank>
<style>
  html, body {
    margin: 0;
  }
  body {
    display: flex;
    align-items: ${align === "start" ? "start" : "center"};
  }
</style>
${css ? `<style>${css}</style>` : ""}

</head>
<body class="${padding || 'p-2'} transition-colors duration-400">
 <div id="${exampleId}"></div>
 
 <script type="module">
  ${code || ""}
 </script>
 <script>
  // Listen for theme and color updates from parent
  window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'theme-update') {
      const theme = event.data.theme;
      if (theme === 'dark') {
        document.documentElement.classList.add('wa-dark');
      } else {
        document.documentElement.classList.remove('wa-dark');
      }
    }
    if (event.data && event.data.type === 'background-update') {
      const backgroundColor = event.data.backgroundColor;
      if (backgroundColor) {
        document.body.style.backgroundColor = backgroundColor;
      }
    }
    if (event.data && event.data.type === 'foreground-update') {
      const foregroundColor = event.data.foregroundColor;
      if (foregroundColor) {
        document.body.style.color = foregroundColor;
      }
    }
  });
 </script>
</body>
</html>`;
};

