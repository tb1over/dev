'use strict';

var 
    path = require('path'),
    fs = require('fs'),
    http = require('http'),
    url = require('url');

var root = path.resolve(process.argv[2] || '.');
root +=  '/static';

console.log('Static root dir: ' + root);

var server = http.createServer(function(request, response){
    var pathname = url.parse(request.url).pathname;

    var filepath = path.join(root, pathname);

console.log("filepaht: " + filepath);
    fs.stat(filepath, function(err, stat){
        if(!err && stat.isFile()){
            console.log('200', request.url);
            response.writeHead(200);

            fs.createReadStream(filepath).pipe(response);
        }else{
            console.log('404' + request.url);

            response.writeHead(404);
            response.end('404 NOT FOUND');
        }
    });
});

server.listen(8090);
console.log('server is running at http://127.0.0.1:8090/');