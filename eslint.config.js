import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'; // no type declaration from pkg developer
import eslintPluginPrettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: {
      pluginJs,
      pluginReact,
      eslintPluginReactHooks,
      eslintPluginPrettier,
    },
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'prettier/prettier': 'error',
      'react/jsx-no-target-blank': 'off',
      'react/prop-types': 'off',

      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
        },
      ],

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/react-in-jsx-scope': 'off',
      'no-console': 'warn',
      'no-debugger': 'error',
      'consistent-return': 'warn',
      'react/jsx-no-bind': 'off',
      'import/no-commonjs': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'no-unused-vars': 'warn',

      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: ['vite.config.js'],
        },
      ],
    },
  },
];
