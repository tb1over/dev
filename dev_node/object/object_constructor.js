function Dog(name, breed, weight){
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

var fido = new Dog("Fido", "Mixed", 38);
var spot = new Dog("Spot", "Chihuahua", 10);
/*
new 运算符都做了什么?
1. new 首先创建一个新的空对象
2. 接下来，new 设置this, 使其指向这个新对象。
3. 设置this后，调用函数Dog,并将实参传递给它。
4. 执行Dog函数，给新创建的this对象的属性赋值
5. Dog函数执行完成，运算符new返回this,将其赋值给变量fido
*/

var dogs = [fido, spot];

for(var i=0;i<dogs.length;i++){
    var size = "small";
    if(dogs[i].weight > 10){
        size = "lage";
    }
    console.log("Dog: " + dogs[i].name
                        + " is a " + size
                        + " " + dogs[i].breed);
}