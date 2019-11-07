// 引入fs模块
var fs = require('fs')
// 异步打开文件
fs.open('ftr.txt','r+',function(err,fd){
  if(err){
    return console.error(err)
  }
  console.log('file open success!')
  console.log('截取6字节内的文件内容 超出部分去除')
  // 截取文件
  var buf = Buffer.alloc(1024)

  fs.ftruncate(fd,6,function(err){
    if(err){
      return console.log(err)
    }
    console.log('文件截取成功')
    console.log('读取相同文件')
    fs.read(fd, buf, 0, buf.length, 0, function(err,bytes){
      if(err){
        console.log(err)
      }
      // 仅输出读取的字节
      if(bytes>0){
        console.log(buf.slice(0,bytes).toString())
      }
      // 关闭文件
      fs.close(fd,function(err){
        if(err){
          console.log(err)
        }

        console.log('close success')
      })

    })
  })


})