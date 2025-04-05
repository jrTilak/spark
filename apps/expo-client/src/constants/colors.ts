import hslToHex from "hsl-to-hex";

/**
 * Colors are defined in HSL format, copy paste from global.css, but commas are removed.
 */
export const colorsInHSL = {
  light: {
    background: "25 23 95",
    foreground: "25 5 0",
    card: "25 23 90",
    "card-foreground": "25 5 10",
    popover: "25 23 95",
    "popover-foreground": "25 95 0",
    primary: "25 95 53.1",
    "primary-foreground": "0 0 100",
    secondary: "25 23 70",
    "secondary-foreground": "0 0 0",
    muted: "-13 23 85",
    "muted-foreground": "25 5 35",
    accent: "-13 23 80",
    "accent-foreground": "25 5 10",
    destructive: "0 50 30",
    "destructive-foreground": "25 5 90",
    border: "25 23 50",
    input: "25 23 18",
    ring: "25 95 53.1",
    radius: "0.5rem",
  },
  dark: {
    background: "25 23 5",
    foreground: "25 5 90",
    card: "25 23 0",
    "card-foreground": "25 5 90",
    popover: "25 23 5",
    "popover-foreground": "25 5 90",
    primary: "25 95 53.1",
    "primary-foreground": "0 0 100",
    secondary: "25 23 10",
    "secondary-foreground": "0 0 100",
    muted: "-13 23 15",
    "muted-foreground": "25 5 60",
    accent: "-13 23 15",
    "accent-foreground": "25 5 90",
    destructive: "0 50 30",
    "destructive-foreground": "25 5 90",
    border: "25 23 18",
    input: "25 23 18",
    ring: "25 95 53.1",
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
