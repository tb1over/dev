/*
var arr = [1, [[2, 3], 4], [5, 6]];

var flat = function* (a) {
    var length = a.length;
    for(let i =0; i< length; i++){      //不能使用forEach
        let item = a[i];
        if(typeof item !== 'number'){
            yield* flat(item);
        }else{
            yield item;
        }
    }
};


for(var f of flat(arr)){
    console.log(f);
}
*/

/*
//2. next方法的参数
function* f(){
    for(let i = 0; true; i++){
        let reset = yield i;    //yield表达式不返回值
        if(reset){
            i = -1;
        }
    }
}
var g = f();

 //next函数返回一个遍历器对象，该对象的value属性为yield表达式后的值
console.log(g.next()); 
console.log(g.next());

//next函数带参数，变量被重置为这个参数true
console.log(g.next(true));  

console.log(g.next());
*/

//another example
function* foo(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (x + y + z);
  }
  
  var a = foo(5);
  a.next() // Object{value:6, done:false}
  a.next() // Object{value:NaN, done:false}
  a.next() // Object{value:NaN, done:true}
  
  var b = foo(5);
  b.next() // { value:6, done:false }
  b.next(12) // { value:8, done:false }
  b.next(13) // { value:42, done:true 

