// fs 操作流  
// fs流 及其读取  
const fs = require('fs')

// 以流的方式读取文件
let fileReadStream = fs.createReadStream('index.js')

// 读取次数
let count = 0

// 保存数据
let str = ''

// 开始读取
fileReadStream.on('data',(chunk)=>{
  console.log(chunk)
  // console.log(chunk.length)
  console.log(`${++count}  接收到${chunk.length}`)
  str += chunk
})

// 读取完成
fileReadStream.on('end',()=>{
  console.log('---结束---')
  console.log(count)
  console.log(str)
})

// 读取失败
fileReadStream.on('error',(error)=>{
  console.log(error)
})

// 通过fs.createReadStream创建读取流
// 读取文件 index.js
// 控制台打印输出


// 流的存入
let data = "console.log('Hello World! save some data ')"
// 创建一个可以写入的流 写到index.js中
let writeStream = fs.createWriteStream('index.js')
// 开始写入
writeStream.write(data,'utf8')
// 写入完成
writeStream.end()
// 监听完成
writeStream.on('finish',()=>{
  console.log('write finish')
})