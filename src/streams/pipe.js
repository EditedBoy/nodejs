// Поток відповіді (response)

let http = require('http');
let fs = require('fs');

new http.Server(function (request, response) {

    //Коли іде запит  на відповідний URL - тоді віддати йому файл
    console.log(request.url);
    if (request.url === '/index.html') {
        // fs.readFile('index.html', function (err, content) {
        //     if (err) {
        //         response.statusCode = 500;
        //         response.end("Server error");
        //     } else {
        //         response.setHeader("Content-Type", "text/html; charset=utf-8");
        //         response.end(content);
        //     }
        // });

        let file = new fs.ReadStream('index.html');
        sendFile(file, response);
    }
}).listen(12345);

function sendFile(file, response) {
    file.pipe(response);

    file.on('error', function (err) {
        response.statusCode = 500;
        response.end(err);
        console.log(err);
    });

    file
        .on('open', function () {
            console.log("open");
        })
        .on('close', function () {
            console.log("close");
        });
    response.on('close',function () {
        file.destroy();
    });

    // file.pipe(process.stdout);
}


// You can use pipe method which do the same
// function sendFile(file, response) {
//     file.on('readable', write);// write - is a reference of write() callback
//
//     function write() {
//         let fileContent = file.read(); // read
//         if (fileContent && !response.write(fileContent)) { // send
//             file.removeListener('readable', write);
//
//             response.once('drain', function () { // wait
//                 file.on('readable', write);
//                 write();
//             })
//         }
//     }
//
//     file.on('end', function () {
//         response.end();
//     });
// }