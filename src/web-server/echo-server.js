let http = require('http');
let url = require('url');

let server = http.createServer(function (request, response) {
    console.log("Request: " + request.method + " " + request.url);
    let urlParser = url.parse(request.url, true);
    // debugger;

    if (urlParser.pathname === '/echo' && urlParser.query.message) {
        // response.writeHead(200, "OK", {'Cache-Control': 'no-cache, no-store, must-revalidate'});
        response.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');// removeHeader
        response.end("Message: " + urlParser.query.message);
    } else {
        response.statusCode = 404;
        response.end("Page not foundA");
    }
}).listen(12345, '127.0.0.1');