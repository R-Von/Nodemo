// 结合fs发送文件中的数据
// 引入http和fs模块
var http = require('http')
var fs = require('fs')
// 创建服务器
var server = http.createServer()
// 监听request事件 设置请求函数
server.on('request',function(req,res){
  // 处理url
  var url = req.url

  if(url==="/"){
    res.setHeader('Content-Type','text/plain')
    fs.readFile('./views/index.html',function(err,data){
      if(err){
        res.send('文件读取失败,请稍后重试！')
      }else{
        // data默认为二进制 可通过 toString方法转化为字符串
        // res.end() 支持两种数据类型 二进制和字符串
        res.writeHead(200,{
          'Content-Type':'text/html'
        })
        res.end(data)
      }
    })
  }else if(url==="/register"){
    // url:统一资源定位符
    // 一个url最终其实是要对应到一个资源的
    fs.readFile('./views/register.html',function(err,data){
      if(err){
        res.end('failed,try again')
      }else{
        res.setHeader(
          'Content-Type','text/html'
        )
        res.end(data)
      }
    })
  }else{
    res.end('<h1>404 Not Found </h1>')
  }
})

server.listen(8010,function(){
  console.log('Server is running...')
})