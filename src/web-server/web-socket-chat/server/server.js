let fs = require('fs');
let clientPagePath = fs.realpathSync('../client/client.html', []);

let express = require('express');
let app = express();
let server = app.listen(12345);
let webSocketServer = require('socket.io').listen(server);


app.get('/', function (request, response) {
    response.end("Hello to chat");
});

app.get('/chat', function (request, response) {
    response.sendFile(clientPagePath);
});


webSocketServer.on('connection', function (socket) {
    socket.on('message', function (msg) {
        console.log("1" + msg);
        webSocketServer.emit('message', msg);
    });
});

server.listen(function () {
    console.log("Starting server...");
});

