let fs = require('fs');

console.log("Read from file");
fs.readFile('../files/file.txt', {encoding: "utf-8"}, function (err, data) {
        if (err) {
            if (err.code === "ENOENT") {
                console.log(err.message)
            } else {
                console.log(err);
            }
        } else {
            console.log(data);
        }
    }
);


console.log("\n\n\nRead from buffer");
fs.readFile(__filename, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
});
