module.exports = {
  root: true,
  // ❗️ It's very important that you don't have any rules configured at the top-level config,
  // and to move all configurations into the overrides section. Since JavaScript rules
  // can't run on GraphQL files and vice versa, if you have rules configured at the top level,
  // they will try to also execute for all overrides, as ESLint's configs cascade
  overrides: [
    {
      files: 'src/**/*.{cjs,tsx,ts,js}',
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'next/core-web-vitals'
      ],
      env: {
        es2022: true,
        node: true
      }
    },
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2022,
        ecmaFeatures: {
          jsx: true
        }
      },
      parser: '@typescript-eslint/parser',
      plugins: ['react', 'react-hooks', '@typescript-eslint'],
      rules: {
        // "no-unused-vars": "off",
        // "indent": "off",
        // "require-await": "off",
        'array-bracket-spacing': [
          'error',
          'never',
          {
            arraysInArrays: false,
            singleValue: false
          }
        ],
        'space-in-parens': ['error', 'never'],
        'space-before-blocks': 'error',
        'space-infix-ops': [
          2,
          {
            int32Hint: false
          }
        ],
        'comma-spacing': [
          'error',
          {
            before: false,
            after: true
          }
        ],
        'object-curly-spacing': [
          'error',
          'always',
          {
            objectsInObjects: false
          }
        ],
        'key-spacing': [
          'error',
          {
            beforeColon: false,
            afterColon: true
          }
        ],
        'react/jsx-curly-spacing': [
          'warn',
          {
            when: 'never',
            children: {
              when: 'always'
            }
          }
        ],
        'react/jsx-filename-extension': [
          'warn',
          {
            extensions: ['.ts', '.tsx']
          }
        ],
        // "react/react-in-jsx-scope": "off",
        'react/jsx-first-prop-new-line': 'warn',
        'react/jsx-max-props-per-line': 'warn',
        'react/prop-types': 'error',
        'react/jsx-closing-bracket-location': ['warn', 'tag-aligned'],
        'react/jsx-tag-spacing': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/type-annotation-spacing': 'error',
        // '@typescript-eslint/explicit-module-boundary-types': 'error',
        // "@typescript-eslint/no-explicit-any": "off",
        // "@typescript-eslint/no-var-requires": "off",
        '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
        // '@typescript-eslint/explicit-function-return-type': [
        //   'error',
        //   {
        //     allowExpressions: true,
        //     allowHigherOrderFunctions: true
        //   }
        // ],
        '@typescript-eslint/keyword-spacing': ['error'],
        '@typescript-eslint/indent': ['error', 2],
        '@typescript-eslint/sort-type-union-intersection-members': 'error',
        'jsx-quotes': ['warn', 'prefer-double'],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'arrow-spacing': 'error',
        'no-trailing-spaces': 'error',
        'no-whitespace-before-property': 'error',
        'brace-style': [
          'error',
          '1tbs',
          {
            allowSingleLine: true
          }
        ]
      },
      settings: {
        react: {
          version: 'detect'
        }
      }
    },
    {
      // Setup GraphQL Parser
      files: '*.{graphql,gql}',
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
      parserOptions: {
        schema: 'schema.graphql',
        operations: 'src/graphql/**/*.{tsx,gql,ts}'
      }
    },
    {
      // Setup processor for operations/fragments definitions on code-files
      files: 'src/**/*.{tsx,ts}',
      processor: '@graphql-eslint/graphql',
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2022,
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    {
      // Setup recommended config for operations files
      files: 'src/**/*.{graphql,gql}',
      extends: 'plugin:@graphql-eslint/operations-recommended',
      rules: {
        '@graphql-eslint/require-id-when-available': [
          'error',
          { fieldName: '_id' }
        ],
        '@graphql-eslint/unique-fragment-name': 'error',
        '@graphql-eslint/no-anonymous-operations': 'error',
        '@graphql-eslint/naming-convention': [
          'error',
          {
            OperationDefinition: {
              style: 'PascalCase',
              forbiddenPrefixes: ['Query', 'Mutation', 'Subscription', 'Get'],
              forbiddenSuffixes: ['Query', 'Mutation', 'Subscription']
            }
          }
        ],
        '@graphql-eslint/no-case-insensitive-enum-values-duplicates': ['error'],
        '@graphql-eslint/require-description': [
          'error',
          { FieldDefinition: true }
        ]
      }
    }
  ]
}
