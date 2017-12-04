function* helloWorldGenerator(){
    yield 'hello';
    yield 'world';

    return 'ending';
}
//函数调用并不执行，而是返回一个遍历器对象
var hw = helloWorldGenerator();

//每次调用next都让遍历器向下一个状态
//每次调用从函数头部或上一次停下来的地方开始执行
//直到遇到下一个yield或者return
//yield表达式是暂停执行的标记，而next方法可以恢复执行:
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
