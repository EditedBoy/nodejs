let domain = require('domain');
let serverDomain = domain.create();

let server;

serverDomain.on('error', function (err) {
    console.log("Domain catch an error");

    if (server) {
        server.close();
    }

    setTimeout(function () {
        process.exit(1);
    }, 1000).unref();
});

serverDomain.run(function () {
    let http = require('http');
    let handler = require('./handler');
    // let db = require('mongodb');

    server = http.createServer(function (request, response) {
        let requestDomain = domain.create();
        requestDomain.add(request);
        requestDomain.add(response);

        requestDomain.on('error', function (err) {
            response.statusCode = 500;
            response.end("Internal server error. " + err);
            console.log("Error -> " + err);
            serverDomain.emit('error', err);
        });

        requestDomain.run(function () {
            handler(request, response);
        });
    });
    server.listen(12345);
});
