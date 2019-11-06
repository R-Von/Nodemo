### response对象
1. ```response.writeHead(statusCode[,statusMessage][,headers])```
表示向请求头发送响应头
参数说明:
- statusCode:状态码,3位的HTTP状态码,404 Not Found,200 OK 
- statusMessage:可选地,可以将用户可读的statusMessage作为第二个参数
- headers:响应头,即Content-Type。常用值有:(1)text/html:HTML格式 (2)text/plain:纯文本格式（3application/x-www-form-urlencoded：数据被编码为名称/值对，这是标准的编码格式。
ps:```writeHead```方法只能在消息上调用一次 且必须在调用res.end()前调用
2.```response.write()```
发送一块响应主体,也就是说用来给客户端发送响应数据。
write可以使用多次,但是最后一定要用end来结束响应,否则客户端会一直等待。
3.```response.end()```
此方法向服务器发出信号,表示已发送所有响应头和主体,该服务器应该视为此消息完成。必须在每个响应上调用方法response.end()
### request对象
1. ```request.url ```
获取请求路径,获取到的是端口后之后的那一部分路径,也就是说所有的url都是以/开头的,判断路径处理响应。
2.```request.socket.localAddress```
获取ip地址
3.```request.socket.remotePort```
获取源端口

