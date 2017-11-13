
var queryString = require('querystring'),
    fs = require('fs'),
    formidable = require('formidable');


function start(response, request){
    console.log('Request handler "start" was called...');

    var body = `<html>
        <head>
            <meta content="text/html" charset="utf-8" />
        </head>
        <body>
            <form action="/upload" method="post" enctype="multipart/form-data">
                <input type="file" name="upload"/>
                <input type="submit" value="Submit text" />
            </form>
        </body>
    </html>`;

    response.writeHead(200, {"Content-Type":"text/html"});      //html
    response.write(body);
    response.end();

}

function upload(response, request){

    console.log('Request handler "upload" was called...');  //中文乱码

    var form = new formidable.IncomingForm();
    console.log("about to parse...");

    form.parse(request, function(error, fields, files) {
        console.log("parsing done");
        fs.renameSync(files.upload.path, "/tmp/git.jpeg");
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("received image:<br/>");
        response.write("<img src='/show' />");
        response.end();
      })
}

function show(response, request){
    console.log('Request handler "show" was called...');

    fs.readFile("/tmp/git.jpeg", "binary", (error, file)=>{
        if(error){
            response.writeHead(200, {"Content-Type":"text/plain"});
            response.write(error + "\n");
            response.end();
        }else{
            response.writeHead(200, {"Content-Type":"image/jpeg"});
            response.write(file, "binary");
            response.end();
        }
    });
}

exports.start = start;
exports.upload = upload;
exports.show = show;