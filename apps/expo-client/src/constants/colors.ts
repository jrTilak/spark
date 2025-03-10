import hslToHex from "hsl-to-hex";

/**
 * Colors are defined in HSL format, copy paste from global.css, but commas are removed.
 */
export const colorsInHSL = {
  light: {
    background: "240 21 11",
    foreground: "0 0 100",
    card: "20 14.3 4.1",
    cardForeground: "60 9.1 97.8",
    popover: "20 14.3 4.1",
    popoverForeground: "60 9.1 97.8",
    primary: "38 100 50",
    primaryForeground: "240 21 11",
    secondary: "240 3.7 15.9",
    secondaryForeground: "0 0 98",
    muted: "12 6.5 15.1",
    mutedForeground: "0 0 63.9",
    accent: "240 3.7 15.9",
    accentForeground: "0 0 98",
    destructive: "0 84.2 60.2",
    destructiveForeground: "60 9.1 97.8",
    border: "233 19 17",
    input: "233 19 17",
  },
  dark: {
    background: "240 21 11",
    foreground: "0 0 98",
    card: "240 10 3.9",
    cardForeground: "0 0 98",
    popover: "240 10 3.9",
    popoverForeground: "0 0 98",
    primary: "0 0 98",
    primaryForeground: "240 5.9 10",
    secondary: "240 3.7 15.9",
    secondaryForeground: "0 0 98",
    muted: "240 3.7 15.9",
    mutedForeground: "240 5 64.9",
    accent: "240 3.7 15.9",
    accentForeground: "0 0 98",
    destructive: "0 72 51",
    destructiveForeground: "0 0 98",
    border: "240 3.7 15.9",
    input: "240 3.7 15.9",
    ring: "240 4.9 83.9",
  },
} as const;
export type ColorName = keyof (typeof colorsInHSL)["light"] & keyof (typeof colorsInHSL)["dark"];
export type ColorScheme = keyof typeof colorsInHSL;

export const COLORS = {
  light: Object.fromEntries(
    Object.entries(colorsInHSL.light).map(([key, value]) => [
      key,
      // @ts-expect-error: Object entries are not typed correctly
      hslToHex(...value.split(" ").map(Number)),
    ]),
  ) as Record<ColorName, string>,
  dark: Object.fromEntries(
    Object.entries(colorsInHSL.dark).map(([key, value]) => [
      key,
      // @ts-expect-error: Object entries are not typed correctly
      hslToHex(...value.split(" ").map(Number)),
    ]),
  ) as Record<ColorName, string>,
};
