import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { labApiPlugin } from './server/plugin.js'

const root = path.dirname(fileURLToPath(import.meta.url))

function elevenLabsEntry() {
  const base = path.resolve(root, 'node_modules/@elevenlabs/client')
  const entry = [
    'dist/lib.modern.js',
    'dist/platform/web/index.js',
    'dist/index.js',
  ]
    .map((file) => path.join(base, file))
    .find((file) => fs.existsSync(file))

  return {
    name: 'elevenlabs-client-entry',
    enforce: 'pre',
    resolveId(id) {
      if (id === '@elevenlabs/client' && entry) return entry
      return null
    },
  }
}

export default defineConfig(({ mode }) => {
  const labEnv = loadEnv(mode, root, '')
  return {
    plugins: [
      elevenLabsEntry(),
      react(),
      labApiPlugin({
        loginToken: labEnv.ICATU_LOGIN_TOKEN,
        apiKey: labEnv.ELEVENLABS_API_KEY,
        siteAgentId: labEnv.ICATU_SITE_AGENT,
        voiceAgentId: labEnv.ICATU_VOICE_AGENT,
      }),
    ],
    resolve: {
      extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.cjs'],
      alias: {
        react: path.resolve(root, 'node_modules/react'),
        'react-dom': path.resolve(root, 'node_modules/react-dom'),
        'react-router-dom': path.resolve(root, 'node_modules/react-router-dom'),
      },
      dedupe: ['react', 'react-dom', 'react-router-dom'],
    },
    server: {
      port: 5180,
      strictPort: true,
    },
    preview: {
      port: 5180,
      strictPort: true,
    },
  }
})
