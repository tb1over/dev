//test()函数有两个参数，这两个参数都是函数，如果执行成功，我们将调用resolve('200 OK')，
//如果执行失败，我们将调用reject('timeout in ' + timeOut + ' seconds.')
function test(resolve, reject){
    var timeOut = Math.random() * 2;    //生成一个0-2之间的随机数
    console.log('set timeout to: ' + timeOut + ' seconds.');
    setTimeout( function(){
        if(timeOut < 1){
            console.log('call resolve()...');
            resolve('200 OK');
        }else{
            console.log('call reject()...');
            reject('timeout in ' + timeOut + ' seconds.');
        }
    },timeOut * 1000);
}

/*
var p1 = new Promise(test);
var p2 = p1.then(function(result){  //返回成功状态执行该函数
    console.log('成功：' + result);
});
var p3 = p1.catch(function(result){ //返回失败状态执行该函数
    console.log('失败：' + result);
});*/
new Promise(test).then(function(result){
    console.log('成功:' + result);
}).catch(function(reason){
    console.log('失败:' + reason);
});