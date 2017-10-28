'use strict';

var fs = require('fs');

var rs = fs.createReadStream('sample.txt', 'utf-8');

rs.on('data', function(chunk){
    console.log('DATA:');
    console.log(chunk);
});

rs.on('end', function(){
    console.log('END');
});

rs.on('error', function(err){
    console.log('ERROR:'+ err);
});

//使用流写入数据
var ws = fs.createWriteStream('outfile.txt', 'utf-8');
ws.write('使用Steam写入数据...\n');
ws.write('END.');
ws.end();

var ws1 = fs.createWriteStream('out_bin.txt', 'utf-8');
ws1.write(new Buffer('使用Stream写入二进制...\n', 'utf8'));
ws1.write(new Buffer('END.', 'utf8'));
ws1.end();

//pipe
//pipe()把一个文件流和另一个文件流串起来，这样源文件的所有数据就自动写入到目标文件里
var rs2 = fs.createReadStream('sample.txt', 'utf8');
var ws2 = fs.createWriteStream('out_bin.txt', 'utf8');

rs2.pipe(ws2);