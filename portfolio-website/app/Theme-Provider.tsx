'use client';

import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes";
import { ReactNode } from "react";

// Extend the ThemeProviderProps to explicitly require children.
type CustomThemeProviderProps = ThemeProviderProps & {
    children: ReactNode;
};

export function ThemeProvider({ children}: CustomThemeProviderProps) {
    return <NextThemesProvider >{children}</NextThemesProvider>;
}
