var fs = require('fs')
fs.stat('test.txt',function(err,stats){
  console.log(stats)
  console.log(stats.isFile())
})