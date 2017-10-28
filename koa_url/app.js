const Koa = require('koa'); //返回构造函数，用大写

//返回函数
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');

const app = new Koa();


//add body-parser middleware
app.use(bodyParser());

//add router middleware
app.use(router.routes());


//middileware   log request url
app.use(async(ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}`);
    await next();       //调用下一个middleware
});



//add url-router
router.get('/hello/:name', async(ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}</h1>`;
});

//node 和koa都不能解析body功能，使用koa-bodyparser
router.get('/', async(ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name:<input name="name" value="koa"></p>
            <p>Password:<input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>
    `;
});

//处理post请求
router.post('/signin', async (ctx, next) => {
    var 
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name:${name}, password: ${password}`);
    if(name === 'koa' && password === '12345'){
        ctx.response.body = `welcome, ${name}`;
    }else{
        ctx.response.body = `
            <h1>Login faild!</h1>
            <p><a href="/">Try again</a></p>
        `;
    }
});

app.listen(3000);
console.log('app started at port 3000...');