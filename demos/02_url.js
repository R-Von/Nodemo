var url = require('url')

var http = require('http')

http.createServer(function(req,res){
  // 使用url获取服务器地址 
  console.log(req.url)

  // 防止重复请求 排除 favicon.ico 的情况
  if(req.url != '/favicon.ico'){
    // 使用url.parse方法
    /**
     * parse方法需要两个参数：
     * 第一个参数是地址
     * 第二个参数是true的话 表示把 get传值转换成对象
     */
    var result = url.parse(req.url,true)
    console.log(result)
    console.log(result.query.userName)
    console.log(result.query.userAge)

    // 打印结果
    // /?name=1&userName=name&userAge=age
    // Url {
    //   protocol: null,
    //   slashes: null,
    //   auth: null,
    //   host: null,
    //   port: null,
    //   hostname: null,
    //   hash: null,
    //   search: '?name=1&userName=name&userAge=age',
    //   query: [Object: null prototype] {
    //     name: '1',
    //     userName: 'name',
    //     userAge: 'age'
    //   },
    //   pathname: '/',
    //   path: '/?name=1&userName=name&userAge=age',
    //   href: '/?name=1&userName=name&userAge=age'
    // }
    // name
    // age
    
  }


  res.write("<h1 style='text-align:center'>Hello NodeJS</h2>")

  res.end()

}).listen(3030)