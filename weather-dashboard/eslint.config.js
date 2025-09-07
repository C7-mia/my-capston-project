import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import tsRecommended from '@typescript-eslint/eslint-plugin/configs/recommended.js';
import prettierRecommended from 'eslint-plugin-prettier/recommended.js';

export default [
  {
    // Global settings
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        browser: true,
        node: true,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    ignores: ['node_modules/', 'dist/'],
  },
  reactRecommended,
  tsRecommended,
  prettierRecommended,
  {
    // Custom rules
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
    
