var fs = require('fs')
console.log('ready to delete')
// fs.rmdir('./test',(err)=>{
//   if(err){

//   }
// })
fs.readdir('./test',function(err,files){
  if(err){
    throw err 
  }
  console.log(files)
  files.forEach(file=>{
    console.log(file)
    var path = './test/'+file
    console.log(path)
    fs.rmdir(path,function(err){
      if(err){
        throw err
      }
      console.log(path+" delete success ")
    })
  })
})