
// 04 处理POST请求

var server  = require('./server');
var router = require('./router');
var requestHandler = require('./requestHandlers');

//依赖注入的方式，将路由函数作为参数传递过去
//依赖注入的方式，将请求处理程序注入
var handle = {};
handle['/'] = requestHandler.start;
handle['/start'] = requestHandler.start;
handle['/upload'] = requestHandler.upload;

server.start(router.route, handle);