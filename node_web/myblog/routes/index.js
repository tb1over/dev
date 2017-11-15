

module.exports = function(app){

    app.get('/', (req, res)=>{
        res.redirect('/posts');
    });

    app.use('/signout', require('./signout'));  //登出
    app.use('/signup', require('./signup'));    //注册
    app.use('/signin', require('./signin'));    //登录
    app.use('/posts', require('./posts'));      //文章相关
};