
var http = require('http');
var url = require('url');       //处理请求路径


function start(route, handle){

    http.createServer(function(request, response){

        var pathname = url.parse(request.url).pathname;
        console.log(`Request for: ${pathname} received...`);

        route(handle, pathname);

        response.writeHead(200, {"Content-Type":"text/plain"});
        response.write("hello world");
        response.end();
    }).listen(8080);
    console.log('server started at port 8080...');
}

exports.start = start;

