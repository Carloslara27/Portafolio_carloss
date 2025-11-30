'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function ThemeProviderWrapper({ children, ...props }: any) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}