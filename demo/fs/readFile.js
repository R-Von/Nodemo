// 引入fs模块
var fs = require('fs')
// 读取文件
fs.readFile('test.txt',function(err,data){
  // read success
  if(err){
    throw err
  }
  // read failed
  console.log(data)
  console.log(data.toString())
})
// 设置输出编码
fs.readFile('test.txt','utf-8',function(err,data){
  if(err){
    throw err
  }
  // 读取成功
  console.log('设置编码读取')
  console.log(data)
})