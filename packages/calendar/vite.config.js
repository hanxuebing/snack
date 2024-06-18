import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import AutoImport from "unplugin-auto-import/vite";
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

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
    // {
    //   name: 'style',
    //   generateBundle(config, bundle) {
    //       //这里可以获取打包后的文件目录以及代码code
    //       const keys = Object.keys(bundle)
    //       for (const key of keys) {
    //           const bundler = bundle[key]
    //           //rollup内置方法,将所有输出文件code中的.scss换成.css,因为我们当时没有打包scss文件
    //           this.emitFile({
    //               type: 'asset',
    //               fileName: key,//文件名名不变
    //               source: bundler.code.replace(/\.scss/g, '.css')
    //           })
    //       }
    //   }
    // }
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
      entry: resolve(__dirname, 'src/index.js'),
      name: 'calendar',
      // the proper extensions will be added
      fileName: 'calendar'
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
