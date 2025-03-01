import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import turboPlugin from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";
import unicorn from "eslint-plugin-unicorn";
import unusedImports from "eslint-plugin-unused-imports";
import tseslintParser from "typescript-eslint";
/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
    },
  },
  // Unicorn Plugin Rules
  {
    plugins: {
      unicorn,
    },
    rules: {
      "unicorn/filename-case": ["error", { "case": "kebabCase", "ignore": ["README.md"] }],
    },
  },
  // Unused Imports Plugin Rules
  {
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      "unused-imports/no-unused-imports": "error",
    },
  },
  // General Settings (for TypeScript and parser options)
  {
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
  },
  // Spacing and formatting rules
  {
    rules: {
      "indent": ["error", 2], // 2-space indentation
      "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1, "maxBOF": 0 }], // Limit empty lines
      "space-in-parens": ["error", "never"], // No spaces inside parentheses
      "array-bracket-spacing": ["error", "never"], // No spaces inside array brackets
      "object-curly-spacing": ["error", "always"], // Spaces inside object literals
      "key-spacing": ["error", { "beforeColon": false, "afterColon": true }], // Space after colon in objects
      "comma-spacing": ["error", { "before": false, "after": true }], // Space after commas
      "newline-before-return": "error", // Enforce newline before return
      "padding-line-between-statements": [
        "error",
        {
          blankLine: "always",
          prev: "*",
          next: "block"
        },
        {
          blankLine: "always",
          prev: "block",
          next: "*"
        },
        {
          blankLine: "always",
          prev: "*",
          next: "block-like"
        },
        {
          blankLine: "always",
          prev: "block-like",
          next: "*"
        }
      ],
    },
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_"
        }
      ],
    }
  },
  {
    ignores: ["dist/**"],
  },
];
