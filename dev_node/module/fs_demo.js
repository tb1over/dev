'use strict';

var fs = require('fs');

//异步读取文件
fs.readFile('sample.txt', 'utf-8', function(err, data){
    if(err){
        console.log(err);
    }else{
        console.log(data + ' readed by Asyn function!');
        console.log(data.length + ' bytes');
    }
});

//同步读取文件
try {
    var data = fs.readFileSync('sample.txt', 'utf-8');
    console.log(data + ' reader by Sync function!');
} catch (err) {
    console.log(err);
}

//文件信息

fs.stat('sample.txt', function(err, stat){
    if(err){
        console.log(err);
    }else{
        console.log('isFile:' + stat.isFile());
        console.log('isFile' + stat.isDirectory());

        if(stat.isFile()){
            console.log('size: ' + stat.size);
            console.log('birth time:' + stat.birthtime);
            console.log('modified time: ' + stat.mtime);
        }
    }
});