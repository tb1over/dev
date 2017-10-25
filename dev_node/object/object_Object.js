/*
所有原型链的终点都是Object，所有对象都是从它派生而来的。
Object实现了多个重要的方法:hasOwnProperty(), toString()
*/
function Robot(name, year, owner){
    this.name = name;
    this.year = year;
    this.owner = owner;
}
var toy = new Robot("Toy", 2013, "Avary");
console.log(toy.toString());        //[object Object],格式不友好

//重写toString方法
Robot.prototype.toString = function(){
    return this.name + " Robot belonging to " + this.owner;
}
console.log(toy.toString());
console.log("Robot is: " + toy);

/*注意：
千万不能重写Object的如下属性：
constructor
hasOwnProperty
isPropertyOf
propertyIsEnumerable
可以重写：
toString
toLocaleString
valueOf
*/
