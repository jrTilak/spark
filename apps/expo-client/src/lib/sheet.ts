import LoginSheet from "@/components/sheets/login-sheet";
import { registerSheet, SheetDefinition } from "react-native-actions-sheet";

const SHEETS = {
  "login-sheet": LoginSheet,
};

type SheetName = keyof typeof SHEETS;

for (const [name, sheet] of Object.entries(SHEETS)) {
  registerSheet(name as SheetName, sheet);
}

// We extend some of the types here to give us great intellisense
// across the app for all registered sheets.
declare module "react-native-actions-sheet" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface Sheets extends Record<SheetName, SheetDefinition> {}
}

export {};
