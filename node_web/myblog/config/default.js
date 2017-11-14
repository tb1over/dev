
module.exports = {

    port : 3000,                    //监听端口
    session : {                     //express-session配置信息
        secret : 'myblog',
        key : 'myblog',
        maxAge : 2592000000
    },
    mongodb : 'mongodb://localhost:27017/myblog'       //mongodb数据库地址
};