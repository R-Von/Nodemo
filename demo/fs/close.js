var fs = require('fs')
// 异步打开文件
fs.open('test.txt','r+',function(err,fd){
  if(err){
    return console.error(err)
  }
  console.log('open success!')
  // 异步关闭文件
  fs.close(fd,function(err){
    if(err){
      console.log(err)
    }
    console.log('close success')
  })
})