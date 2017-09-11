let http = require('http');
let fs = require('fs');
let url = require('url');
let path = require('path');

let ROOT = __dirname + path.normalize("/public");

http.createServer(function (request, response) {
    if (!checkAccess(request)) {
        response.statusCode = 403;
        response.end("Tell me the secret to access.");
        return;
    }
    sendFileSafe(url.parse(request.url).pathname, response);
}).listen(12345);

function checkAccess(request) {
    return url.parse(request.url, true).query.secret === 'o_O';
}

function sendFileSafe(filePath, response) {
    try {
        filePath = decodeURIComponent(filePath);
    } catch (err) {
        response.statusCode = 400;
        response.end("Bad Request");
        return;
    }

    if (~filePath.indexOf('\0')) {
        response.statusCode = 400;
        response.end("File not found");
        return;
    }

    // If from url was /deep/nodejs.jpg after normalize() and join() -> dev/nodejs/nodejs/src/file_pathes/public/deep/Rio-2-Official-Trailer-3-40.jpg
    filePath = path.normalize(path.join(ROOT, filePath));

    if (filePath.indexOf(ROOT) !== 0) {
        response.statusCode = 404;
        response.end("File not found");
        return;
    }

    fs.stat(filePath, function (err, stats) {
        if (err || !stats.isFile()) {
            response.statusCode = 404;
            response.end("File not found");
            return;
        }
    });

    sendFile(filePath, response);
}

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