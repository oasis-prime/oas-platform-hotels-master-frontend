module.exports = {
  root: true,
  ignorePatterns: ['**/__generated__/*.{ts,tsx}', 'codegen.ts'],
  overrides: [
    {
      files: '*.{cjs,tsx,ts,js,jsx}',
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      env: {
        es2021: true,
        node: true,
      },
      globals: {
        'cy': true,
      },
    },
    {
      files: '*.{tsx,ts,js,jsx}',
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 12,
        ecmaFeatures: {
          jsx: true,
        },
      },
      parser: '@typescript-eslint/parser',
      'plugins': [
        'react',
        'react-hooks',
        '@typescript-eslint',
      ],
      'rules': {
        'no-unused-vars': 'off',
        'indent': 'off',
        'require-await': 'off',
        'array-bracket-spacing': [
          'error',
          'never',
          {
            'arraysInArrays': false,
            'singleValue': false,
          },
        ],
        'space-in-parens': [
          'error',
          'never',
        ],
        'space-before-blocks': 'error',
        'space-infix-ops': [
          2,
          {
            'int32Hint': false,
          },
        ],
        'comma-spacing': [
          'error',
          {
            'before': false,
            'after': true,
          },
        ],
        'object-curly-spacing': [
          'error',
          'always',
          {
            'objectsInObjects': false,
          },
        ],
        'key-spacing': [
          'error',
          {
            'beforeColon': false,
            'afterColon': true,
          },
        ],
        'react/jsx-curly-spacing': [
          'warn',
          {
            'when': 'never',
            'children': {
              'when': 'always',
            },
          },
        ],
        'react/jsx-filename-extension': [
          'warn',
          {
            'extensions': [
              '.ts',
              '.tsx',
            ],
          },
        ],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-first-prop-new-line': 'warn',
        'react/jsx-max-props-per-line': 'warn',
        'react/prop-types': 'error',
        'react/jsx-closing-bracket-location': [
          'warn',
          'tag-aligned',
        ],
        'react/jsx-tag-spacing': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'warn',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/comma-dangle': [
          'warn',
          'always-multiline',
        ],
        // '@typescript-eslint/explicit-function-return-type': [
        //   'warn',
        //   {
        //     'allowExpressions': true,
        //     'allowHigherOrderFunctions': true,
        //   },
        // ],
        '@typescript-eslint/keyword-spacing': [
          'error',
        ],
        '@typescript-eslint/indent': [
          'error',
          2,
        ],
        '@typescript-eslint/sort-type-union-intersection-members': 'error',
        'jsx-quotes': [
          'warn',
          'prefer-double',
        ],
        'linebreak-style': [
          'error',
          'unix',
        ],
        'quotes': [
          'error',
          'single',
        ],
        'semi': [
          'error',
          'never',
        ],
        'arrow-spacing': 'error',
        'no-trailing-spaces': 'error',
        'no-whitespace-before-property': 'error',
        'brace-style': [
          'error',
          '1tbs',
          {
            'allowSingleLine': true,
          },
        ],
      },
      settings: {
        'react': {
          'version': 'detect',
        },
      },
    },
    {
      files: ["*.graphql"],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
      parserOptions: {
        schema: './schema.graphql',
        operations: 'src/graphql/**/*.{tsx,gql,ts}',
      },
    },
    {
      files: 'src/**/*.{tsx,ts}',
      processor: '@graphql-eslint/graphql',
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2022,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    {
      files: 'src/**/*.{graphql,gql}',
      extends: 'plugin:@graphql-eslint/operations-recommended',
      rules: {
        "@graphql-eslint/naming-convention": [
          'warn',
          {
            types: 'PascalCase',
            VariableDefinition: 'snake_case'
          }
        ]
      },
    },
  ],
}