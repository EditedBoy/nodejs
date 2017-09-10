let http = require('http');
let server = http.createServer(function (request, response) {

}).listen(12345);

setTimeout(function () {
    server.close();
    // server.close(function () {
    //     clearInterval(timer);
    //     process.exit(); // hard termination of server
    // });
}, 2500);

let timer = setInterval(function () {
    console.log(process.memoryUsage());
}, 1000);
timer.unref();// Вказує LibUV, що не враховувати цей обєкт в різних watcher сервера (аналогія потоків-демонів)
// Коли основні івенти перестануть надходити, спрацює setTimeout() -> close()
//timer стає другосортним і його не потрібно враховувати при перевірки внутрішніх watcher-ів

// timer.ref();// Вказує, щоб watcher-и спостерігали за цим обєктом як за одним з головних