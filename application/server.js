var user = require('../entity/user.js');

function run() {
    var andriy = new user.User("andriy");
    var taras = new user.User("taras");

    taras.hello(andriy);

    var number = new RandNumber();
    console.log("Generated random number -> " + number.getRandom());
}

if (module.parent) {
    exports.run = run();
} else {
    run();
}


console.log(module.parent);