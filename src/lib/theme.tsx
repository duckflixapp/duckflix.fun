import { createContext, useContext } from "react";

export type Theme = "dark" | "light";

export const DARK: Record<string, string> = {
  "--color-bg": "#07080d",
  "--color-surface": "#0d0f16",
  "--color-text": "#f9f8ff",
  "--color-muted": "#959ca3",
  "--color-faint": "#3a3f4a",
  "--color-comment": "#4a5568",
  "--color-primary": "#b5c8ff",
  "--color-primary-fg": "#07080d",
  "--color-accent": "#71cd71",
};

export const LIGHT: Record<string, string> = {
  "--color-bg": "#f5f6fa",
  "--color-surface": "#ffffff",
  "--color-text": "#0d0f16",
  "--color-muted": "#6b7280",
  "--color-faint": "#9ca3af",
  "--color-comment": "#9ca3af",
  "--color-primary": "#3b5fc0",
  "--color-primary-fg": "#ffffff",
  "--color-accent": "#2e9e2e",
};

export function applyTheme(theme: Theme) {
  const vars = theme === "dark" ? DARK : LIGHT;
  Object.entries(vars).forEach(([k, v]) =>
    document.documentElement.style.setProperty(k, v),
  );
}

export const ThemeContext = createContext<{ theme: Theme; toggle: () => void } | null>(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme mora biti korišćen unutar ThemeProvider-a");
  }
  return context;
};