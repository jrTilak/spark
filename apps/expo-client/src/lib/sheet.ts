import { registerSheet, SheetDefinition } from "react-native-actions-sheet";
import LoginActionSheet from "@/components/common/login-sheet";

registerSheet("login-sheet", LoginActionSheet);

// We extend some of the types here to give us great intellisense
// across the app for all registered sheets.
declare module "react-native-actions-sheet" {
  interface Sheets {
    "login-sheet": SheetDefinition;
  }
}

export {};
