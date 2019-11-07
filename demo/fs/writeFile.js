var fs = require('fs')
//写入文件内容 (若文件不存在则创建一个文件)
//写入时会先清空文件
var content = "我是新写入的内容"
fs.writeFile('test.txt',content,function(err){
  if(err){
    throw err
  }
  console.log('Saved.')
  // 写入成功后读取测试
  fs.readFile('test.txt','utf-8',function(err,data){
    if(err){
      throw err;
    }
    console.log(data)
  })
})
