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
      parserOptions: {
        ecmaVersion: 'latest', // Use the latest ECMAScript version
        sourceType: 'module',
      },
      globals: {
        window: 'readonly', // Example global variable
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
