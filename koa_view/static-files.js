/*
处理静态文件的middlewares
*/
const path = require('path');
const mime = require('mime');
const fs = require('mz/fs');


/*
mz提供的API和Node.js的fs模块完全相同，但fs模块使用回调，
而mz封装了fs对应的函数，并改为Promise。
这样就可以非常简单的用await调用mz的函数，而不需要任何回调
*/

//url: '/static/'
//dir : __dirname + '/static'
function staticFiles(url, dir) {
    return async(ctx, next) => {
        let rpath = ctx.request.path;
        //判断是否以url开始
        if (rpath.startsWith(url)) {
            //获取文件完整路径
            let fp = path.join(dir, rpath.substring(url.length));
            //判断文件是否存在
            if (await fs.exists(fp)) {
                //查找文件mime
                ctx.response.type = mime.lookup(rpath);
                //读取文件内容，赋值给response.body
                ctx.response.body = await fs.readFile(fp);
            } else {
                //文件不存在
                ctx.response.status = 404;
            }
        } else {
            //不是指定前缀的url,继续处理下一个middleware
            await next();
        }
    }
}

module.exports = staticFiles;