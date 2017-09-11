let http = require('http');
let fs = require('fs');


// Async
// 1. Не блокуючий -> використовується при паралельних виконаннях (потоків)
// 2. Не потрібна робота через try-catch-finally
// 3. Складніші
http.createServer(function (request, response) {
    if (request.url === '/') {
        fs.readFile('index.html', function (err, info) { // callback
            if (err) {
                console.log(err);
                response.statusCode = 500;
                response.end("Async server error");
                return;
            }
            response.end(info);
        });
    }
}).listen(12345);


// Sync
// 1. Блокуючий -> використовується там де немає паралельних виконань (потоків)
// 2. Працює через try-catch-finally
// 3. Простий  зрозумілий
http.createServer(function (request, response) {
    let info;
    if (request.url === '/') {
        try {
            info = fs.readFileSync('index.html');
            response.end(info);
        } catch (err) {
            console.log(err);
            response.statusCode = 500;
            response.end("Sync server error");
        }
    }

}).listen(11111);
