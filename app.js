const http = require('http')


http.createServer(function(req,res){

    res.writeHead(200,{'content-Type': 'text/plain'})
    res.end('hello world')

}).listen(8080,'127.0.0.1')