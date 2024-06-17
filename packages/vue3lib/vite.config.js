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
    }),
    {
      name: 'style',
      generateBundle(config, bundle) {
          //这里可以获取打包后的文件目录以及代码code
          const keys = Object.keys(bundle)
          for (const key of keys) {
              const bundler = bundle[key]
              //rollup内置方法,将所有输出文件code中的.scss换成.css,因为我们当时没有打包scss文件
              this.emitFile({
                  type: 'asset',
                  fileName: key,//文件名名不变
                  source: bundler.code.replace(/\.scss/g, '.css')
              })
          }
      }
    }
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
      entry: 'src/index.js',
      // entry: path.resolve(__dirname, 'src/index.js'),
      name: 'BundleUI',
    },
    rollupOptions: {
      // 打包排除基础库
      external: ['vue', /\.scss/, /\.less/],
      input: ['src/index.js'],
      output: [
        {
          // 打包成 es module
          format: 'es',
          // 重命名
          entryFileNames: '[name].js',
          // 打包目录和开发目录对应
          preserveModules: true,
          // 输出目录
          dir: 'es',
          // 指定保留模块结构的根目录
          preserveModulesRoot: 'src',
        },
        {
          // 打包成 commonjs
          format: 'cjs',
          // 重命名
          entryFileNames: '[name].js',
          // 打包目录和开发目录对应
          preserveModules: true,
          // 输出目录
          dir: 'lib',
          // 指定保留模块结构的根目录
          preserveModulesRoot: 'src',
        },
      ]
    },
  }
})
