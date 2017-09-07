// exports
// global
var words = require('../locale/ua.json');

function User(name) {
    this.name = name;
}

User.prototype.hello = function (who) {
    console.log(words.Hello + " " + who.name);
};


function RandNumber() {
    this.number = Math.random();
}

RandNumber.prototype.getRandom = function () {
    return this.number;
};

exports.User = User;
global.RandNumber = RandNumber;