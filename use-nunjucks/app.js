
const nunjucks = require("nunjucks");

function createEnv(path, opts){
    var
        autoescape = opts.autoescape === undefined ? true : opts.autoescape,
        noCache = opts.noCache || false,
        watch = opts.watch || false,
        throwOnUndefined = opts.throwOnUndefined || false,
        env = new nunjucks.Environment(
            new nunjucks.FileSystemLoader('views', {
                noCache : noCache,
                watch : watch,
            }),{
                autoescape : autoescape,
                throwOnUndefined : throwOnUndefined
            }
        ); 
    if(opts.filters){
        for(var f in opts.filters){
            env.addFilter(f, opts.filters[f]);
        }
    }
    return env;
}

/*变量env就表示Nunjucks模板引擎对象
它有一个render(view, model)方法，正好传入view和model两个参数，并返回字符串.

*/
var env = createEnv('views', {
    watch :true,
    filters :{
        hex : function(n){
            return '0px' + n.toString(16);
        }
    }
});

//var s = env.render('hello.html', {name:'小明'});
//var s = env.render('hello.html', {name: '<script>alert("小明")</script>'});

var s = env.render('extend.html', {
    header: 'Hello',
    body: '123123'
})
console.log(s);