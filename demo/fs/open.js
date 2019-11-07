// 引入fs模块
var fs = require('fs')
// 异步打开文件 input.txt
// input.txt没有任何内容 fs打开input.txt文件进行读写
fs.open('input.txt','r+',function(err,fd){
  if(err){
    return console.error(err)
  }
  console.log('open success')
})