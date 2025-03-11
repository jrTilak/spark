import React, { createContext, useContext, ReactNode } from "react";
import { useColorScheme as useNativewindColorScheme } from "nativewind";
import useAsyncEffect from "@/hooks/use-async-effect";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { THEME_KEY } from "@/constants/keys";

export type Theme = "light" | "dark";
export const DEFAULT_THEME: Theme = "dark";
type ThemeContext = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  isDark: boolean;
  isLight: boolean;
};

const ThemeContext = createContext<ThemeContext | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
  onThemeLoaded?: (theme: Theme) => void;
};

export const ThemeProvider = ({ children, onThemeLoaded }: ThemeProviderProps) => {
  const nativeTheme = useNativewindColorScheme();

  /**
   * Fetch the theme from storage and set it as the initial theme.
   */
  useAsyncEffect(async () => {
    const themeFromLocal = await AsyncStorage.getItem(THEME_KEY);

    if (themeFromLocal && (themeFromLocal === "light" || themeFromLocal === "dark")) {
      nativeTheme.setColorScheme(themeFromLocal as Theme);
    } else {
      nativeTheme.setColorScheme(DEFAULT_THEME);
    }

    onThemeLoaded?.(nativeTheme.colorScheme as Theme);
  }, []);

  const value: ThemeContext = {
    theme: nativeTheme.colorScheme ?? DEFAULT_THEME,
    setTheme: nativeTheme.setColorScheme,
    isDark: nativeTheme.colorScheme === "dark",
    isLight: nativeTheme.colorScheme === "light",
    toggleTheme: nativeTheme.toggleColorScheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
