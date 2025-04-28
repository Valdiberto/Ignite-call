import { defineConfig } from 'eslint/config'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default defineConfig([
  {
    files: ['**/*.d.ts'],
    rules: {
      // Desativa todas as regras
      '@typescript-eslint/no-unused-vars': 'off',
      // outras regras que quiser desligar para d.ts
    },
  },
  {
    extends: compat.extends(
      '@rocketseat/eslint-config/react',
      'next/core-web-vitals',
    ),
  },
])
