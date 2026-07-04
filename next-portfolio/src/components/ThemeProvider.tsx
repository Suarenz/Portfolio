"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

/**
 * Wraps next-themes ThemeProvider with bryl-minimal defaults:
 * - Three modes: light, dark, system (default: system per SKILL.md)
 * - Applies .dark class on <html> for token re-mapping
 * - Persists choice to localStorage
 * - Honors prefers-color-scheme for "system" mode
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
      storageKey="bryl-theme"
    >
      {children}
    </NextThemesProvider>
  );
}
