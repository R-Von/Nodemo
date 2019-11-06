var http = require('http')
http.createServer((req,res)=>{
  res.writeHead(200,{
    'Content-Type':'text/html'
  })
  res.write('Hello Node')
  res.write('<h1>Hello Node~</h1>')
  res.end()
}).listen(8010)

console.log('The serve is running at http://127.0.0.1:8010')
