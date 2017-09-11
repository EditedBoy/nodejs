let http = require('http');

let server = http.createServer(function (request, response) {
    // process.nextTick(function () {
    // request.on('readable',function () {
    //     console.log("On the first data 1");
    // });
    // });

}).listen(12345);