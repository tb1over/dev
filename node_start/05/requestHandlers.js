
var queryString = require('querystring');


function start(response, postData){
    console.log('Request handler "start" was called...');

    var body = `<html>
        <head>
            <meta content="text/html" charset="utf-8" />
        </head>
        <body>
            <form action="/upload" method="post">
                <textarea name="text" rows="5" cols=60></textarea>
                <input type="submit" value="Submit text" />
            </form>
        </body>
    </html>`;

    response.writeHead(200, {"Content-Type":"text/html"});      //html
    response.write(body);
    response.end();

}

function upload(response, postData){

    console.log('Request handler "upload" was called...');  //中文乱码
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write(`You've sent:${queryString.parse(postData).text}`);
    response.end();
}

exports.start = start;
exports.upload = upload;