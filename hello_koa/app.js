const Koa = require('koa');

const app = new Koa();


//middileware
app.use(async(ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`);

    await next();       //调用下一个middleware
});

app.use(async (ctx, next) => {
    const start = new Date().getTime();
    await next();   //调用下一个middlewaie
    const ms = new Date().getTime() - start;    //耗费时间
    console.log(`Time: ${ms}ms`);
});

app.use(async(ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>hello, koa2!</h1>';
});

app.listen(3000);
console.log('app started at port 3000...');