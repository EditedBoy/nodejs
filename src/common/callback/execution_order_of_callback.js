let http = require('http');
let fs = require('fs');

new http.Server(function (request, response) {

    console.log(request.url);
    if (request.url === '/index.html') {
        let file = new fs.ReadStream('index.html');
        sendFile(file, response);
    }
}).listen(12345);


function sendFile(file, response) {
    file.on('readable', write);// write - is a reference of write() callback

    function write() {
        console.log("write 1");
        let fileContent = file.read();
        console.log("write 2");
        if (fileContent && !response.write(fileContent)) {
            file.removeListener('readable', write)
        }
        console.log("write 3");
    }
    get1();
    get2();
    get3();
}

function get1() {
    console.log("get1");

}

function get2() {
    console.log("get2");
}

function get3() {
    console.log("get3");
}
