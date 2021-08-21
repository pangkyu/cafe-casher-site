const http = require('http');
const fs = require('fs');
const url = require('url');
const server = http.createServer(function(request,response){
    const reqUrl = request.url;
    const parsedUrl = url.parse(reqUrl, true);
    const pathname = parsedUrl.pathname;

    if(pathname === '/'){
        fs.readFile(__dirname + '/index.html', function(err, result){
            if(err){
                response.writeHead(404);
                response.end('404 : NOT FOUND');
            }else{
                response.writeHead(200);
                response.end(result);
            }
        });
    }else{
        fs.readFile(__dirname + pathname, function(err, result){
            if(err){
                response.writeHead(404);
                response.end('404 : not found');
            }else{
                response.writeHead(200);
                response.end(result);
            }
        });
    }
});
server.listen(3000);