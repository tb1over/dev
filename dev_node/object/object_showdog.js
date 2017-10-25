//原型链继承
/*
现在需要创建一个表演犬，不止有普通犬具有的方法，还具有自己特有的方法
可以在Dog原型基础上创建一个表演犬原型ShowDog，通过该原型实例化出来的对象就可以
继承Dog原型、ShowDog原型的方法
多继承：从原型链中继承
*/
function Dog(name, breed, weight){
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}
Dog.prototype.species = "Canine";
Dog.prototype.bark = function(){
    if(this.weight > 25){
        console.log(this.name + " says Woof!");
    }else{
        console.log(this.name + " says Yip!");
    }
};
Dog.prototype.run = function(){
    console.log("Run!");
};
Dog.prototype.wag = function(){
    cosole.log("wag!");
};
Dog.prototype.sitting = false;
Dog.prototype.sit = function(){
    if(this.sitting){
        console.log(this.name + " has already sitting!");
    }else{
        this.sitting = true;
        console.log(this.name + " is now sitting!");
    }
};

//表演犬构造函数
function ShowDog(name, breed, weight, handler){
    /*
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    由于属性name, breed, weight,在Dog原型构造函数中已经存在，所以交给它处理
    */
    /*
    Dog.call(this, name, breed, weitht)
    call是一个内置方法。可对任何函数调用它,Dog.call将调用Dog构造函数
    第一个参数this:注意是指向当前ShowDog实例，构造函数Dog将设置当前ShowDog对象的属性name, breed, weight
    使用call间接调用Dog构造函数，是因为这样可以控制this指向,此时this执行ShowDog实例对象,传递给Dog构造函数
    则在执行Dog构造函数时，this依然指向ShowDog实例对象
    */
    Dog.call(this, name, breed, weight);        //重用构造函数Dog的代码设置属性
    this.handler = handler;
}
/*创建一个继承Dog原型的对象，不提供任何参数，并且将之赋值给prototype
  则ShowDog的实例对象将从Dog原型中继承相应的方法
*/
ShowDog.prototype = new Dog();         //实现原型链
ShowDog.prototype.league = "Webville"; //所有ShowDog实例对象都具有该属性
//所有表演犬所具有的方法，放在原型中
ShowDog.prototype.stack = function(){
    console.log("Stack");
};
ShowDog.prototype.bait = function(){
    console.log("bait");
};
ShowDog.prototype.gait = function(){
    console.log("gait");
};
ShowDog.prototype.groom = function(){
    console.log("Groom");
};

var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
scotty.stack();
scotty.bark();                  //从原型链中查找到Dog,从该原型中继承
console.log(scotty.league);
console.log(scotty.species);    //从原型链中查找属性species,在Dog原型中查到，从该原型继承

// other tests
var fido = new Dog("Fido", "Mixed", 38);
if(fido instanceof Dog){                    //true
    console.log("Fido is a Dog!");
}
if(fido instanceof ShowDog){                //false
    console.log("Fido is a ShowDot!");
}

if(scotty instanceof Dog){                  //true
    console.log("Scotty is a Dog!");
}
if(scotty instanceof ShowDog){              //true
    console.log("Scotty is a ShowDog!");
}

console.log("Fido constructor is: " + fido.constructor);        //Dog
console.log("Scotty constructor is: " + scotty.constructor);    //Dog
//上述输出Scotty constructor is: Dog.... 是由于没有显式设置scotty.constructor属性，
//将从Dog原型那里继承，使用下述代码修复
ShowDog.prototype.constructor = ShowDog;
console.log("Scotty constructor is: " + scotty.constructor);    //ShowDog