
// 05 处理文件上传

//需要安装node-formidable模块，用以对POST数据解析

// https://www.nodebeginner.org/index-zh-cn.html?utm_source=ourjs.com
// http://nqdeng.github.io/7-days-nodejs/#1.1

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