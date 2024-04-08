const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const rimraf = require('rimraf');

async function deleteNodeModules(directory) {
  const files = await readdir(directory);
  
  for (const file of files) {
    const filePath = path.join(directory, file);
    const fileStats = await stat(filePath);
    
    if (fileStats.isDirectory()) {
      if (file === 'node_modules') {
        // 删除 node_modules 目录
        rimraf.sync(filePath);
        console.log(`已删除目录: ${filePath}`);
      } else {
        // 递归进入子目录
        await deleteNodeModules(filePath);
      }
    }
  }
}

// 替换为你的 monorepo 根目录的路径
const monorepoPath = '.';

deleteNodeModules(monorepoPath)
  .then(() => {
    console.log('已完成删除 node_modules 目录');
  })
  .catch(error => {
    console.error('删除 node_modules 目录时发生错误:', error);
  });
