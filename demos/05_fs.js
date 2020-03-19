
/**
 * fs 文件管理
 * 1. fs.stat 检测是文件还是目录
 * 2. fs.mkdir 创建目录
 * 3. fs.writeFile 创建写入文件
 * 4. fs.appendFile 追加文件
 * 5. fs.readFile 读取文件
 * 6. fs.readdir 读取目录
 * 7. fs.rename 重命名
 * 8. fs.rmdir 删除目录
 * 9. fs.unlink 删除文件
 */

//  1. fs.stat 检测文件还是目录
// let fs = require('fs')
// fs.stat('index.js',(error, stats) => {
//   if(error){
//     console.log(error)
//     return false
//   }else{
//     console.log(stats)
//     // Stats {
//     //   dev: 16777220,
//     //   mode: 33188,
//     //   nlink: 1,
//     //   uid: 501,
//     //   gid: 20,
//     //   rdev: 0,
//     //   blksize: 4096,
//     //   ino: 22739387,
//     //   size: 26,
//     //   blocks: 8,
//     //   atimeMs: 1583915281669.191,
//     //   mtimeMs: 1583915281669.69,
//     //   ctimeMs: 1583915281669.69,
//     //   birthtimeMs: 1583915266040.053,
//     //   atime: 2020-03-11T08:28:01.669Z,
//     //   mtime: 2020-03-11T08:28:01.670Z,
//     //   ctime: 2020-03-11T08:28:01.670Z,
//     //   birthtime: 2020-03-11T08:27:46.040Z
//     // }
//     console.log(`文件 : ${stats.isFile()}`)

//     console.log(`目录 : ${stats.isDirectory()}`)

//     return false
//   }
// })


// 2 fs.mkdir  创建目录
let fs = require('fs')


/**
 * 接收参数
 * path - 将创建的目录路径
 * mode - 目录权限（读写权限） 默认 0777
 * callback - 回调 传递异常参数 err 
 */