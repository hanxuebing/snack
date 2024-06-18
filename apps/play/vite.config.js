import { fileURLToPath, URL } from 'node:url'
import AutoImport from "unplugin-auto-import/vite";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
      eslintrc: {
        enabled: true
      },
      dts: false
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@snack/calendar': fileURLToPath(new URL('../../packages/calendar/src', import.meta.url))
    }
  }
})
