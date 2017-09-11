let fs = require('fs');

fs.open(__filename, "r", function (err, info) {
    console.log("IO");
});

setImmediate(function () { // Виконується на наступній ітерації циклу JS
    console.log("immediate");
});

process.nextTick(function () { // Виконується до любих IO-подій (до відкриття файлу). Краще використовувати nextTick()
    console.log("nextTick");
});