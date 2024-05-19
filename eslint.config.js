import globals from 'globals';
import pluginJs from '@eslint/js';
import jsdoc from 'eslint-plugin-jsdoc';

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
    files: ['**/*.js'],
    plugins: {
      jsd: jsdoc,
    },
    rules: {
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'no-unused-vars': ['warn'],
      'no-console': 0,
      'jsd/require-description': 'error',
      'jsd/check-values': 'error',
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          moduleDirectory: ['node_modules', 'src/'],
        },
      },
    },
  },
  pluginJs.configs.recommended,
];
