let EventEmitter = require('events').EventEmitter;

let server = new EventEmitter();
server.on('request', function (request) {
    request.approwed = true;
});

server.on('request', function (request) {
    console.log(request);
});

server.emit('request', {from: "Client #1"});
server.emit('request', {from: "Client #2"});

console.log(server.listeners('request'));


let db = new EventEmitter();

function Request() {
    let self = this;

    this.bigData = new Array(1e6).join('*');

    this.send = function (data) {
        console.log(data);
    };

    function onData(info) {
        self.send(info);
    }

    this.end = function () {
        db.removeListener('data', onData)
    };

    db.on('data', onData);
}

setInterval(function () {
    let request = new Request();
    request.end();
    console.log(process.memoryUsage().heapUsed);
    console.log(db);
}, 200);