//for...of循环可以自动便利Generator函数时生成的Iterator对象
//此时不需要调用next方法
function *foo(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    
    return 6;
}

for(let v of foo()){
    console.log(v);
}
