import { useColorScheme as useNativewindColorScheme } from "nativewind";

/**
 *  Hook to get the current color scheme
 */
export function useColorScheme() {
  const { colorScheme, setColorScheme, toggleColorScheme } = useNativewindColorScheme();

  return {
    colorScheme: colorScheme ?? "light",
    isDark: colorScheme === "dark",
    setColorScheme,
    toggleColorScheme,
  };
}
