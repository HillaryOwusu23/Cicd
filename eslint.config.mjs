import prettierConfig from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default [
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    // files: ['/src/**/*.{ts,tsx}'],

    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest', // Use the latest ECMAScript version
        sourceType: 'module',
      },
      globals: {
        window: 'readonly', // Example global variable
      },
    },

    ignores: ['.config/*', 'next.config.ts', ' /src/sanity/**'],
    rules: {
      'newline-before-return': 'error',
      'spaced-comment': ['error', 'always', { markers: ['/'] }],
      'no-irregular-whitespace': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
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
