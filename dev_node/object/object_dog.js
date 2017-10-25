//构造函数
function Dog(name, breed, weight){
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

//原型,原型中的属性和方法只有一个副本
Dog.prototype.species = "Canine";
Dog.prototype.bark = function(){
    if(this.weight > 25){
        console.log(this.name + " says Woof!");
        //任何情况下，this都指向原始对象，即方法被调用的对象。即便该方法位于原型中F
    }else{
        console.log(this.name + " says Yip!");
    }
};
Dog.prototype.run = function(){
    console.log("run");
};
Dog.prototype.wag = function(){
    console.log("wag");
};

//小狗对象
var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);

//对象自定义方法,则直接调用该对象方法，而不是去原型链中查找bark方法
spot.bark = function(){
    console.log(this.name + " says Woof!");
}

//小狗对象从原型中继承获得方法
fido.bark();
fido.run();
fido.wag();

fluffy.bark();
fluffy.run();
fluffy.wag();

spot.bark();
spot.run();
spot.wag();

Dog.prototype.sitting = false; //通过在原型中将属性设置为false，让所有小狗一开始都是站立
Dog.prototype.sit = function(){
    if(this.sitting){   //该处this.sitting将在原型中查找得到
        console.log(this.name + " is already stting");
    }else{
        this.sitting = true;    //重写原型中的sitting属性，并在小狗实例对象中设置这个属性的值
        console.log(this.name, " is now sitting ");
    }
};
console.log(spot.hasOwnProperty("sitting"));//false，从原型中继承的属性
spot.sit();
spot.sit();
console.log(spot.hasOwnProperty("sitting"));//true,调用sit函数，该函数内设置了this.sitting