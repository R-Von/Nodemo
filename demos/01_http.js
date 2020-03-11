// 1.引入http模块
var http = require('http')

// 2.用http模块创建服务
http.createServer(function(req,res){
  console.log(req)
  // 设置http头部 状态码200 文件类型 html 字符集类型 utf8
  res.writeHead(200,{
    "Content-Type":"text/html,charset=UTF-8"
  })
  // 页面打印值
  res.write('<h1>Hello Node</h1>')
  // 结束响应
  res.end()
}).listen(3030)
// 监听端口
