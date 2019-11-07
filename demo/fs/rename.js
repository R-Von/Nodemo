var fs = require('fs')

fs.rename('old.txt','new.txt',(err)=>{
  if(err) throw err;
  console.log('rename success')
})