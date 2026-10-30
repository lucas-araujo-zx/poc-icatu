import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { labApiPlugin } from './server/plugin.js'

const root = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ mode }) => {
  const labEnv = loadEnv(mode, root, '')
  return {
    plugins: [
      react(),
      labApiPlugin({
        loginToken: labEnv.ICATU_LOGIN_TOKEN,
        apiKey: labEnv.ELEVENLABS_API_KEY,
        siteAgentId: labEnv.ICATU_SITE_AGENT,
        voiceAgentId: labEnv.ICATU_VOICE_AGENT,
      }),
    ],
    resolve: {
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
