
const path = require('path');
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash =  require('connect-flash');
const config = require('config-lite')(__dirname);
const routes = require('./routes');
const pkg = require('./package');

const app = express();

app.set('views', path.join(__dirname, 'views'));    //设置模板目录
app.set('view engine', 'ejs');                      //设置模板引擎

//设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

//session中间件
app.use(session({
    name: config.session.key, //设置cookie中保存session_id的字段的名字
    secret: config.session.secret,  //通过设置secret来计算hash，并放在cookie中，产生的singnedCooke防篡改
    resave : true, //强制更新session
    saveUninitialized: false, //强制创建一个session，即使未登录
    cookie:{
        maxAge : config.session.maxAge
    },
    store: new MongoStore({     //session存储在mongodb
        url:config.mongodb      //mongodb地址
    })
}));

//flash中间件,用来显示通知
app.use(flash());

//使用express-formidable处理表单及上传文件
app.use(require('express-formidable')({
    uploadDir:path.join(__dirname, 'public/img'),   //上传目录
    keepExtensions:true     //保留后缀
}));


//设置模板全局变量
app.locals.blog = {
    title:pkg.name,
    description:pkg.description
};

//添加模板必须的三个变量
app.use(function (req, res, next) {
    res.locals.user = req.session.user;
    res.locals.success = req.flash('success').toString();
    res.locals.error = req.flash('error').toString();
    next();
});


//路由
routes(app);

app.listen(config.port, () => {
    console.log(`${pkg.name} listening on port ${config.port}`);
});
