
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

