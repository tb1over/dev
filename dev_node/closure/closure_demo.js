//闭包的例子，闭包：函数和引用环境
function makeCounter(){
    var count = 0;
    function counter(){
        count += 1;
        return count;
    }
    return counter;
}

var doCount = makeCounter();
console.log(doCount());     //1
console.log(doCount());     //2
console.log(doCount());     //3

//闭包包含的是实际环境，而非环境的副本
function setTimer(doneMessage, n){
    setTimeout(function(){
        console.log(doneMessage);   // setTimeout函数的第一个参数是一个函数引用，在该函数中使用了自由变量doneMessage,所以是一个闭包
    } ,n);
    doneMessage = "OUCH!";          // 输出结果为OUCH, doneMessage的结果已经修改
}
setTimer("Cookie are done !", 1000);