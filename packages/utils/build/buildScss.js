import cpy from 'cpy'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { promises as fs } from "node:fs"
import * as sass from "sass"
import glob from "fast-glob"
// const __filename = fileURLToPath(import.meta.url);
const __dirname = process.cwd();
const sourceDir = resolve(__dirname, './src')
//lib文件目录
const targetLib = resolve(__dirname, './lib')
//es文件目录
const targetEs = resolve(__dirname, './es')
//src目录
const srcDir = resolve(__dirname, './src')
const buildScss = async () => {
   //直接将less文件复制到打包后目录
   await cpy(`${sourceDir}/**/*.scss`, targetLib)
   await cpy(`${sourceDir}/**/*.scss`, targetEs)
   //获取打包后.less文件目录(lib和es一样)
   const scssFiles = await glob("**/*.scss", { cwd: srcDir, onlyFiles: true })
   //遍历含有less的目录
   for (let path in scssFiles) {
       const filePath = `${srcDir}/${scssFiles[path]}`
       //获取less文件字符串
    //    const scssCode = await fs.readFile(filePath, 'utf-8')
       //将less解析成css
       const code = await sass.compileAsync(filePath)
       //拿到.css后缀path
       const cssPath = scssFiles[path].replace('.scss', '.css')
       //将css写入对应目录
       await fs.writeFile(resolve(targetLib, cssPath), code.css)
       await fs.writeFile(resolve(targetEs, cssPath), code.css)
   }
}
buildScss()