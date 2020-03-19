//fs demos
let fs = require('fs')
let path = require('path')
/**
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

 /**
  *  demo1
  *  1. 判断服务器上有没有upload目录 没有则创建
  *  2. 找到css目录下的所有文件 然后打印出来
  */

  fs.stat('upload',(err,stats)=>{
    // 判断有没有upload目录
    if(err){
      // 没有upload目录 则创建
      fs.mkdir('upload',(err)=>{
        if(err){
          console.log(err)
          return false
        }else{
          console.log('mkdir upload success')
        }
      })

    }else{
      console.log(stats)
      console.log(stats.isDirectory())
      console.log('have upload U can do more')
    }
  })

  fs.readdir('css',(err,files)=>{
    if(err){
      console.log(err)
      return false
    }else{
      // console.log(__dirname)
      console.log(files)
      files.map(item=>{
        console.log(path.resolve(__dirname,'/css/'+item))
      })
    }
  })