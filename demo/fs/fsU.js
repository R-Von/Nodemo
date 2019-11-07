var fs = require('fs')

// 删除delete.txt
fs.unlink('delete.txt',function(err){
  if(err){
    return console.log(err)
  }
  console.log('文件删除成功！')
})
