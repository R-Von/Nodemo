var fs = require('fs')

fs.open('test.txt','r+',function(err,fd){
  if(err){
    return console.error(err)
  }
  console.log('open success')
  console.log('read ready')
  // 创建一个大小为1024字节的缓存区
  var buf = Buffer.alloc(1024)
  // 异步读取文章
  fs.read(fd,buf,0,buf.length,0,function(err,bytes,buf){
    if(err){
      console.log(err)
    }
    console.log(bytes+"字节被读取")
    // 仅输出读取的字节
    if(bytes>0){
      console.log(buf.slice(0,bytes).toString())
    }
    // 异步关闭文件
    fs.close(fd,function(err){
      if(err){
        console.log(err)
      }
    })
    console.log('close success')

  })
})