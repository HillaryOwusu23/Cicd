import globals from 'globals';
import prettierConfig from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
import js from '@eslint/js';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parserOptions: {
        allowAutomaticSingleRunInference: true,
        project: ['./*/tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },

    rules: {
      'newline-before-return': 'error',
      'spaced-comment': ['error', 'always', { markers: ['/'] }],
      'no-irregular-whitespace': 'off',
      'padded-blocks': [
        'error',
        {
          classes: 'never',
          switches: 'never',
          blocks: 'never',
        },
      ],
      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
        },
      ],
      'no-console': 'error',
      quotes: ['error', 'single', { avoidEscape: true }],
    },
  },
];
