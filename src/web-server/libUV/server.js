let http = require('http');
let fs = require('fs');

let server = http.createServer();

server.on('request', function (request, response) {
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
});

server.listen(12345);