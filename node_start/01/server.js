var http = require('http');

function start(){
    
    http.createServer(function(request, response){

        console.log('Request received...');
        response.writeHead(200, {"Content-Type":"text/plain"});
        response.write("hello world");
        response.end();
    }).listen(8080);
    console.log('server started at port 8080...');
}

exports.start = start;

