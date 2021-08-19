const http = require('http');
const fs = require('fs');
const server = http.createServer(function(request,response){
    const url = request.url;

    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));

});
server.listen(3000);