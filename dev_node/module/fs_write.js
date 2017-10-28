'use strict'

var fs = require('fs');
var data = 'Hello, NodeJS \n';

fs.writeFile('outfile.txt', data, function(err){
    if(err){
        console.log(err);
    }else{
        console.log('ok');
    }
});

//同步方法

var data1 = " write by sync function ";
try {
    fs.writeFileSync('sync outfile.txt', data1);
} catch (error) {
    console.log(err);
}
