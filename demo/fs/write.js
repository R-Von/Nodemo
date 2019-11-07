// 引入fs模块
var fs = require('fs')
// 异步打开文件
fs.open('test.txt','a',function(err,fd){
  if(err){
    return console.error(err)
  }
  console.log('open success')
  console.log('ready write')
  // 新写入内容为 hello world
  var buffer = Buffer.from(new String('hello world'))
  // 异步写入文件
  console.log('fs.write')
  fs.write(fd, buffer, 0, 12, 0, function(err, bytes, buffer){
    console.error(err)
    if(err){
      throw err
    }
    console.log('write success')
    console.log(bytes+' bytes written')
    console.log(buffer.slice(0,bytes).toString())
    // 异步关闭文件
    fs.close(fd,function(err){
      if(err){
        console.log(err)
      }
      console.log('close success')
    })
  })

})