var fs = require('fs')
console.log('mkdir ./test')

// 异步创建目录
fs.mkdir('./test/',function(err){
  if(err){
    return console.log(err)
  }
  console.log('mkdir success')
})