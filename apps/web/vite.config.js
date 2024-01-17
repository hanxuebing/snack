import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const myPlugin = () => ({
  name: 'configure-server',
  configureServer(server) {
    server.watcher.options = {
      ...server.watcher.options,
      ignored: [
        /node_modules\/(?!@snack\/ui).*/,
        '**/.git/**',
      ]
    }
  },
})
// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ['@snack/ui']
  },
  plugins: [
    vue(), myPlugin()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
