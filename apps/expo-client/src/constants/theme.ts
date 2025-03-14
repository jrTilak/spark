export const NAV_THEME = {
  light: {
    background: "hsl(240, 21%, 11%)", // background
    border: "hsl(233, 19%, 17%)", // border
    card: "hsl(20, 14.3%, 4.1%)", // card
    notification: "hsl(0 84.2% 60.2%)", // destructive
    primary: "hsl(38, 100%, 50%)", // primary
    text: "hsl(0, 0%, 100%)", // foreground
  },

  // not used
  dark: {
    background: "hsl(240, 21%, 11%)", // background
    border: "hsl(240 3.7% 15.9%)", // border
    card: "hsl(240 10% 3.9%)", // card
    notification: "hsl(0 72% 51%)", // destructive
    primary: "hsl(0 0% 98%)", // primary
    text: "hsl(0 0% 98%)", // foreground
  },
};

export const ICON_COLORS = {
  dark: "hsl(240, 21%, 11%)",
  light: "hsl(0, 0%, 100%)",
  muted: "hsl(0, 0%, 63.9%)",
};

export type IconColorKey = keyof typeof ICON_COLORS;
