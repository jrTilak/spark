import { config } from "@shared/eslint-config/react-internal";

export default [
  ...config,
  {
    ignores: [".expo", "app-example"],
  },
  {
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "no-undef": "off",
    },
  },
];
