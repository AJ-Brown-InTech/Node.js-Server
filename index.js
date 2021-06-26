const http = require('http')
const port = 3000
const fs = require('fs')
const server = http.createServer(function(req,res) {
res.writeHead(200,{'Content-Type': 'text/html' })
fs.readFile('index.html', function (error, data) {
if (error){
res.writeHead(404)
res.write('Error: File Not Found')
} else {
  res.write(data)
 }
 res.end()
 })
res.write('Hello World')
})

server.listen(port, function(error){
  if(error){
    console.log('Something went wrong, redo it or learn to spell.', error)
  }
  else {
    console.log('Server is working on port' + port)
  }
})