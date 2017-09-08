const user = require('../entity/user.js');

function run() {
    const andriy = new user.User("andriy");
    const taras = new user.User("taras");

    taras.hello(andriy);

    const number = new RandNumber();
    console.log("Generated random number -> " + number.getRandom());
}

if (module.parent) {
    console.log("IF");
    exports.run = run();
} else {
    console.log("ELSE");
    run();
}