import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,ts}'],
    ...js.configs.recommended,
    languageOptions: {
      globals: globals.node,
    },
    plugins: {
      stylistic,
    },

    rules: {
      // Стили
      'stylistic/semi': ['error', 'always'],
      'stylistic/quotes': ['error', 'single'],
      'stylistic/indent': ['error', 2],
      'stylistic/comma-dangle': ['error', 'always-multiline'],
      'stylistic/space-before-function-paren': ['error', 'never'],
      'stylistic/object-curly-spacing': ['error', 'always'],
      'stylistic/space-infix-ops': 'error',
      'stylistic/space-before-blocks': ['error', 'always'],
      'stylistic/keyword-spacing': ['error', { before: true, after: true }],
      'stylistic/comma-spacing': ['error', { before: false, after: true }],
      'stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'stylistic/space-in-parens': ['error', 'never'],
      'stylistic/no-trailing-spaces': ['error'],
      'stylistic/semi-spacing': ['error', { before: false, after: true }],

    },
  },

  // TypeScript
  ...tseslint.configs.recommended,
]);
