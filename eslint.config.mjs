import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import path from 'path';

export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['node_modules', 'build'],
    extends: [
      'standard-with-typescript',
      'plugin:prettier/recommended',
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended'
    ],
    rules: {
      'prettier/prettier': 'error',
      'import/no-unresolved': [
        'error',
        {
          plugins: [
            'module-resolve',
            {
              alias: {
                '@routes': path.resolve(__dirname, 'src/routes')
              }
            }
          ]
        }
      ]
    }
  }
];
