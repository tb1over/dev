
// 路由

function route(handle, pathname, response){
    console.log(`About to route a request for ${pathname}`);

    if(typeof handle[pathname] === 'function'){
        handle[pathname](response);     //调用处理函数
    }else{
        console.log(`No request handler found for ${pathname}`);

        response.writeHead(200, {"Content-Type":"text/plain"});
        response.write("404 NOT FOUND.");
        response.end();
    }
}

exports.route = route;