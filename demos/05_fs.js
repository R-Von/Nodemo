
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
// let fs = require('fs')


// /**
//  * 接收参数
//  * path - 将创建的目录路径
//  * mode - 目录权限（读写权限） 默认 0777
//  * callback - 回调 传递异常参数 err 
//  */
// fs.mkdir('css',(err)=>{
//   if(err){
//     console.log(err)
//     return false
//   }else{
//     console.log('mkdir success')
//   }       
// })

// 3 fs.rmdir 删除目录
// let fs = require('fs')

// /**
//  * 接收参数
//  * path - 将要创建的目录路径
//  * mode - 目录权限(读写权限) 默认 0777 
//  * callback - 回调 传递异常参数  err
//  */
// fs.rmdir('css',(err)=>{
//   if(err){
//     console.log(err)
//     return false
//   }else{
//     console.log('rmdir success')
//   }
// })

// 4 fs.writeFile 写入文件
// let fs = require('fs')

// /**
//  * filename (String) 文件名称
//  * data (String|Buffer) 写入的内容 可以是字符串或者Buffer数据
//  * - encoding(String) 可选。 默认 ‘utf-8’
//  * - mode(Number) 文件读写权限 默认438
//  * - flag (String) 默认值 ‘w’
//  * callback {Function} 
//  */

//  fs.writeFile('index2.js','console.log("Hello World")',(err)=>{
//    if(err){
//     console.log(err)
//     return false
//    }else{
//      console.log('write success')
//    }
//  })
// 写入会清空

// 05 appendFile 追加文件
// let fs = require('fs')

// fs.appendFile('text.txt',' add some word ',(err)=>{
//   if(err){
//     console.log(err)
//     return false
//   }else{
//     console.log('append success')
//   }
// })

// 没有的话 就会创建新的文件

// 06 fs.readFile 读取文件  fs.readdir 读取目录  
// let fs = require('fs')

// fs.readFile('index.js',(err,data)=>{
//   if(err){
//     console.log(err)
//     return false
//   }else{
//     console.log('success')
//     console.log(data)    //Buffer格式
//     console.log(data.toString())
//   }
// })

// fs.mkdir('css',(err)=>{
//   if(err){
//     console.log(err)
//     return false
//   }else{
//     console.log('success ')
//   }
// })

// fs.writeFile('css/style.css','*{margin:0;padding:0}',(err)=>{
//   if(err){
//     console.log(err)
//     return false
//   }else{
//     console.log('writeSuccess')
//   }
// })

// fs.readdir('css',(err,data)=>{
//   if(err){
//     console.log(err)
//     return false
//   }else{
//     console.log('readdir success')
//     console.log(data)
//   }
// })

// 07 fs.rename 重命名
let fs = require('fs')
// fs.rename('index2.js','test.js',(err)=>{
//   if(err){
//     console.log(err)
//     return false
//   }else{
//     console.log('rename success')
//   }
// })

// rename还可以起到剪切文件的功能

fs.rename('text.txt','css/text.css',(err)=>{
  if(err){
    console.log(err)
    return false
  }else{
    console.log('rename success')
  }
})