let util = require('util');

//---------------inspect()---------------
let obj = {
    a: 5,
    b: 9,
    inspect: function () {
        return "Result -> " + (5 + 9);
    }
};
obj.self = obj;
console.log(obj);


//---------------format()---------------
let str = util.format("Hello %s. My name is %s. I am %d years old. Object %j", "Orest", "Taras", 24, {obj: "object"});
console.log(str);


//---------------inherits()---------------
// Super-class
function Animal(name) {
    console.log("Animal");
    this.name = name;
}

Animal.prototype.walk = function () {
    console.log("Walk -> " + this.name);
};

//Child-class
function Rabbit(name) {
    this.name = name;
}

util.inherits(Rabbit, Animal);

Rabbit.prototype.jump = function () {
    console.log("Jump -> " + this.name);
};


let rabbit = new Rabbit("Tom");
rabbit.walk();
rabbit.jump();