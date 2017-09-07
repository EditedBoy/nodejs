var user = require('../entity/user.js');

var taras = new user.User("taras");
var andriy = new user.User("andriy");

taras.hello(andriy);


var number = new RandNumber();
console.log("Generated random number -> " + number.getRandom());