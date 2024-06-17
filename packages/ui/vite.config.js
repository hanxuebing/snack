import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // sourcemap: true,
    rollupOptions: {
      // 将vue模块排除在打包文件之外，使用用这个组件库的项目的vue模块
      external: ['vue', /\.scss/],
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
    lib: {
         // 指定入口文件
         entry: 'src/index.js',
         // 模块名
         name: 'H_UI'
    }
  },
  plugins: [
    vue(),
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
})
