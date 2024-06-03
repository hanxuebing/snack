import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import AutoImport from "unplugin-auto-import/vite";
import vue from '@vitejs/plugin-vue'
import path from 'path'

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
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@font': fileURLToPath(new URL('./src/assets/font', import.meta.url)),
      '@calendar': fileURLToPath(new URL('./src/assets/calendar', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'BundleUI',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // 打包排除基础库
      external: ['vue', 'element-plus'],
      output: {
        globals: {
          vue: 'Vue',
          'element-plus': 'ElementPlus'
        }
      }
    }
  }
})
