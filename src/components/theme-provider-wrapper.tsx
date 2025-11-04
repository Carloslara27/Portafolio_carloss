'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'


export function ThemeProviderWrapper({ children, ...props }: any) {
  // Add smooth transition class to body when theme changes
  React.useEffect(() => {
    const handleThemeChange = () => {
      document.documentElement.classList.add('transition-colors');
      document.documentElement.classList.add('duration-300');
      setTimeout(() => {
        document.documentElement.classList.remove('transition-colors');
        document.documentElement.classList.remove('duration-300');
      }, 300);
    };

    // Listen for theme changes and apply smooth transitions
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}