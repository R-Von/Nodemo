var http = require('http')

var tools1 = require('./03_tool-add')

http.createServer(function(req,res){

  res.writeHead(200,{
    "Content-Type":"text/html;charset=UTF-8"
  })

  res.write('<h2 style="text-align:center">Hello NodeJS</h2>')

  console.log(tools1.add(1,2,3))
  
  res.end()

}).listen(3030)
