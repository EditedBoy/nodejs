let http = require('http');
let fs = require('fs');

module.exports = function handler(request, response) {
    if (request.url === '/') {
        fs.readFile('index.html', function (err, content) {
            if (err) {
                throw err;
            }
            response.end(content);
        })
    } else {
        response.statusCode = 404;
        response.end("Not found");
    }
};

// let redis = require('redis').createClient();
// module.exports = function dbHandler(request, response) {
//     if (request.url === '/') {
//         redis.get('data', process.domain.bind(function (err, content) {
//             throw Error("Redis callback error");
//         }));
//     } else {
//         response.statusCode = 404;
//         response.end("Not found");
//     }
// };