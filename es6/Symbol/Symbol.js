
/*
//使用symbol值定义属性时，Symbol值必须放在方括号中
let s = Symbol();
let obj = {
    [s]: function(arg){
        console.log(arg);
    }
};

obj[s](123);
*/

//Symbol类型还可以定义一组常量


/*
// 3.消除魔法数字
const shapeTye = {
    //triangle : 'Triangle'
    triangle : Symbol()     //triangle等于什么无所谓，只要不重复即可
};
function getArea(shape, options){
    let area = 0;
    switch(shape){         
        case shapeTye.triangle:         //case 'Triangle' 魔术字符串
            area = 0.5 * options.width * options.height
            break;
    }
    return area;
}
console.log(getArea(shapeTye.triangle, {width:100, height:100}));
*/

/*
//4.属性名的遍历
//Symbol作为属性名，该属性不会出现在for...in,for...of循环中
//也不会被Object.keys(), Object.getOwnPropertyName(),JSON.stringify返回
//Object.getOwnPropertySymbols()方法可以获取指定对象的所有Symbol属性名
const obj = {};
let a = Symbol('a');
let b = Symbol('b');

obj[a] = 'hello';
obj[b] = 'world';

const objectSymbols = Object.getOwnPropertySymbols(obj);
console.log(objectSymbols);     //数组
*/

/*
const obj = {};

let foo = Symbol('foo');

Object.defineProperty(obj, foo, {value:'football'});

for(let i in obj){
    console.log(i);     //无输出
}

console.log(Object.getOwnPropertyNames(obj));   //[]

console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(foo)]
*/

/*
//5. 新的api ， Reflect.ownKeys 可以返回所有类型的键名
let obj = {
    [Symbol('my_key')] : 1,
    enum : 2,
    nonenum : 3
};
console.log(Reflect.ownKeys(obj)); //  ["enum", "nonEnum", Symbol(my_key)]
*/

/*
//6 Symbol.for()  Symbol.keyFor()
// Symbol.for()会被登记在全局环境中，但是Symbol不会
// Symbol.for()不会每次都返回一个新的Symbol类型的值，而是先检查给定的key是否已经存在
let s1 = Symbol.for('foo');
let s2 = Symbol.for('foo');
console.log(s1 === s2);     //true

let s =  Symbol.for('bar') === Symbol.for('bar');
console.log(s);             //true

let t = Symbol('m') === Symbol('m');
console.log(t);             //false

// Symbol.keyFor()返回一个已登记的Symbol类型值的key
let ss = Symbol.for('cc');
console.log(Symbol.keyFor(ss));     //cc

let tt = Symbol('dd');
console.log(Symbol.keyFor(tt));     //undefined
*/

