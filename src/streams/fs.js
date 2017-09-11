let fs = require('fs');

// fs.ReadStream наслідується від stream.Readable
// let stream = new fs.ReadStream(__filename, {encoding: 'utf-8'});
let stream = new fs.ReadStream('index.html', {encoding: 'utf-8'});

stream.on('readable', function () {
    let data = stream.read();
    if (data) {
        console.log(data.length);
        console.log(data);
    }
});

stream.on('end', function () {
    console.log("END");
});

stream.on('error', function (err) {
    if (err.code === 'ENOENT') {
        console.log("File no found")
    } else {
        console.log(err);
    }
});
