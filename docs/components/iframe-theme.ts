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

// Convert Tailwind padding class to React style object
// Multiplies the number by 4px (e.g., p-3 → { padding: '12px' })
export const convertPaddingToStyle = (padding: string | undefined): React.CSSProperties => {
  if (!padding) {
    return { padding: '8px' }; // Default to p-2 (8px)
  }

  // Match numeric padding classes: p-3, px-4, py-2, pt-8, pb-4, pl-6, pr-6
  const match = padding.match(/^(p|px|py|pt|pb|pl|pr)-(\d+)$/);
  if (!match) {
    return { padding: '8px' }; // Default to p-2 if invalid
  }

  const [, type, value] = match;
  const pixels = `${parseInt(value, 10) * 4}px`;

  switch (type) {
    case 'p':
      return { padding: pixels };
    case 'px':
      return { paddingLeft: pixels, paddingRight: pixels };
    case 'py':
      return { paddingTop: pixels, paddingBottom: pixels };
    case 'pt':
      return { paddingTop: pixels };
    case 'pb':
      return { paddingBottom: pixels };
    case 'pl':
      return { paddingLeft: pixels };
    case 'pr':
      return { paddingRight: pixels };
    default:
      return { padding: '8px' }; // Default to p-2
  }
};

// Convert Tailwind padding class to CSS pixel values
// Multiplies the number by 4px (e.g., p-3 → padding: 12px)
export const convertPaddingToCSS = (padding: string | undefined): string => {
  if (!padding) {
    return 'padding: 8px'; // Default to p-2 (8px)
  }

  // Match numeric padding classes: p-3, px-4, py-2, pt-8, pb-4, pl-6, pr-6
  const match = padding.match(/^(p|px|py|pt|pb|pl|pr)-(\d+)$/);
  if (!match) {
    return 'padding: 8px'; // Default to p-2 if invalid
  }

  const [, type, value] = match;
  const pixels = parseInt(value, 10) * 4;

  switch (type) {
    case 'p':
      return `padding: ${pixels}px`;
    case 'px':
      return `padding-left: ${pixels}px; padding-right: ${pixels}px`;
    case 'py':
      return `padding-top: ${pixels}px; padding-bottom: ${pixels}px`;
    case 'pt':
      return `padding-top: ${pixels}px`;
    case 'pb':
      return `padding-bottom: ${pixels}px`;
    case 'pl':
      return `padding-left: ${pixels}px`;
    case 'pr':
      return `padding-right: ${pixels}px`;
    default:
      return 'padding: 8px'; // Default to p-2
  }
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
  stretch,
}: {
  exampleId: string;
  code: string;
  css?: string;
  padding?: string;
  align?: string;
  stretch?: boolean;
}): string => {
  return `<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="//cdn.jsdelivr.net/npm/@awesome.me/webawesome@3.0.0/dist-cdn/styles/themes/default.min.css" rel="stylesheet" />
<base target=_blank>
<style>
  :root {
    --colors-gray-700: #2d3748;
    --colors-gray-200: #e2e8f0;
    --bg-dot-color: var(--colors-gray-200);
  }
  .wa-dark {
    --bg-dot-color: var(--colors-gray-700);
  }
  html, body {
    margin: 0;
    transition: background-color 0.4s ease-in-out, color 0.4s ease-in-out;
  }
  body {
    background-image: radial-gradient(circle, var(--bg-dot-color) 1px, transparent 1px);
    background-size: 16px 16px;
  }
  .example-container {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: ${stretch ? "stretch" : "center"};
  }
</style>
${css ? `<style>${css}</style>` : ""}

</head>
<body>
 <div class="example-container" id="${exampleId}"></div>
 
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

