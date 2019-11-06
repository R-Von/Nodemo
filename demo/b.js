var http = require('http')

// 1 创建server
var server = http.createServer()

// 2 监听request请求事件 设置请求处理函数
server.on('request',function(req,res){
  console.log(`收到请求,请求路径是${req.url}`)
  console.log(`请求我的客户端的地址是 remoteAddress:${req.socket.remoteAddress}, remotePort:${req.socket.remotePort}`)
  var url = req.url
  res.writeHead(200,{
    'Content-Type':'text/html;charset=UTF-8'
  })
  if(url==="/"){
    res.end('<h1>Index Page</h1>')
  }else if(url==='/login'){
    res.end('<h1>Login Page</h1>')
  }else{
    res.end('404 Not Found')
  }
})
// 3.绑定端口号 启动服务
server.listen(8010,()=>{
  console.log('server start at http://localhost:8010')
})

