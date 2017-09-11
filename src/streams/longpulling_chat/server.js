let http = require('http');
let fs = require('fs');

let chat = require('./chat');

http.createServer(function (request, response) {
    switch (request.url) {
        case '/':

            sendFile("index.html", response);
            break;
        case '/subscribe':
            chat.subscribe(request, response);
            break;
        case '/publish':
            let body = '';

            request
                .on('readable', function () {
                    body += request.read();

                    if (body.length > 1e4) {
                        response.statusCode = 413;
                        response.end("Your message is to big")
                    }
                })
                .on('end', function () {
                    try {
                        body = JSON.parse(body);
                    } catch (err) {
                        response.statusCode = 400;
                        response.end("Bad Request");
                        return;
                    }
                    chat.publish(body.message);
                    response.end("OK");
                });
            break;
        default:
            response.statusCode = 404;
            response.end("Not found");
    }
}).listen(12345);


function sendFile(filePath, response) { // Це не найкращий підхід для відправки файлу
    fs.readFile(filePath, function (err, content) {
        if (err) {
            throw err;
        }
        let mime = require('mime').lookup(filePath);//npm install mime
        response.setHeader('Content-Type', mime + "; charset=utf-8");
        // HTML -> Content-Type: text/html
        // Image -> Content-Type: image/jpeg
        // Модуль 'mime' визначає потрібний тип файлу
        response.end(content);
    })
}