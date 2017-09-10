let http = require('http');

let server = new http.Server();// http.Server -> net.Server -> EventEmitter
// Events: listening, connection, request
server.listen(12345, '127.0.0.1');

server.on('request', function (request, response) {
    response.end("Hello world");
    response.end("First NodeJS web server");
});