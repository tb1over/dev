
var http = require('http');
var url = require('url');       //处理请求路径


function start(route, handle){

    http.createServer(function(request, response){

        var pathname = url.parse(request.url).pathname;
        console.log(`Request for: ${pathname} received...`);

        //处理POST请求
        var postData = '';
        request.setEncoding('utf8');
        //绑定数据块到达事件
        request.addListener('data', (postDataChunk) => {
            postData += postDataChunk;
            console.log(`Received POST data chunk ${postDataChunk}.`);
        });

        //数据块全部接受完成
        request.addListener('end', () => {
            route(handle, pathname, response, postData);
        })


    }).listen(8080);
    console.log('server started at port 8080...');
}

exports.start = start;

