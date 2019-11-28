# Express
Express是一个高度包含,快速而极简的Node.js Web框架
## 路由
路由用于确定应用程序如何响应客户端请求,包含一个URI(路径)和一个特定的HTTP请求方法
每个路由可以具有一个或多个处理程序函数,这些函数在路由匹配时执行
路由定义采用以下结构
```app.method(path,handler)```
注:app是express的实例 method是指HTTP请求方法(GET,POST等) path是指服务器上的路径 handler是指路由匹配时执行的函数
## 静态文件
Express提供了内置的中间件```express.static```来设置静态文件
```
//我们只有公开了public目录 才可以直接通过 /pubilc/xx 的访问方式访问public目录中的资源
app.use('/public/',express.static('./public/'))
```
## GET和POST
### bodyParser 
```bodyParser```是一个HTTP请求体解析的中间件 借此可以解析JSON,Raw,文本等格式的请求体
当请求体解析之后,解析值会被放到req.body属性中
- bodyParser.json() 解析JSON格式
- bodyParser.raw() 解析二进制格式
- bodyParser.text() 解析文本格式
- bodyParser.urlencoded() 解析文本格式