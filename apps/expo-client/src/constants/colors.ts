import hslToHex from "hsl-to-hex";

/**
 * Colors are defined in HSL format, copy paste from global.css, but commas are removed.
 */
export const colorsInHSL = {
  light: {
    background: "0 0 100",
    foreground: "20 14.3 4.1",
    card: "0 0 100",
    "card-foreground": "20 14.3 4.1",
    popover: "0 0 100",
    "popover-foreground": "20 14.3 4.1",
    primary: "24.6 95 53.1",
    "primary-foreground": "60 9.1 97.8",
    secondary: "60 4.8 95.9",
    "secondary-foreground": "24 9.8 10",
    muted: "60 4.8 95.9",
    "muted-foreground": "25 5.3 44.7",
    accent: "60 4.8 95.9",
    "accent-foreground": "24 9.8 10",
    destructive: "0 84.2 60.2",
    "destructive-foreground": "60 9.1 97.8",
    border: "20 5.9 90",
    input: "20 5.9 90",
    ring: "24.6 95 53.1",
    radius: "0.3rem",
    "chart-1": "12 76 61",
    "chart-2": "173 58 39",
    "chart-3": "197 37 24",
    "chart-4": "43 74 66",
    "chart-5": "27 87 67",
  },
  dark: {
    background: "20 14.3 4.1",
    foreground: "60 9.1 97.8",
    card: "20 14.3 4.1",
    "card-foreground": "60 9.1 97.8",
    popover: "20 14.3 4.1",
    "popover-foreground": "60 9.1 97.8",
    primary: "20.5 90.2 48.2",
    "primary-foreground": "60 9.1 97.8",
    secondary: "12 6.5 15.1",
    "secondary-foreground": "60 9.1 97.8",
    muted: "12 6.5 15.1",
    "muted-foreground": "24 5.4 63.9",
    accent: "12 6.5 15.1",
    "accent-foreground": "60 9.1 97.8",
    destructive: "0 72.2 50.6",
    "destructive-foreground": "60 9.1 97.8",
    border: "12 6.5 15.1",
    input: "12 6.5 15.1",
    ring: "20.5 90.2 48.2",
    "chart-1": "220 70 50",
    "chart-2": "160 60 45",
    "chart-3": "30 80 55",
    "chart-4": "280 65 60",
    "chart-5": "340 75 55",
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
