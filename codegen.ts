import type{ CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'schema.graphql',
  documents: 'src/graphql/**/*.ts',
  generates: {
    'src/types.ts': {
      plugins: ['typescript'],
    },
    'src/': {
      preset: 'near-operation-file',
      presetConfig: { extension: '.generated.tsx', folder: 'generated', baseTypesPath: '~@/types' },
      plugins: ['typescript-operations'],
      config: { withHooks: true },
    },
  },
}

export default config
