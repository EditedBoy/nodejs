let clients = [];

exports.subscribe = function (request, response) {
    console.log("subscribe");

    clients.push(response);

    response.on('close', function () {
        clients.splice(clients.indexOf(res), 1);
    })
};

exports.publish = function (message) {
    console.log("publish " + message);

    clients.forEach(function (response) {
        response.end(message);
    });

    clients = [];
};

setInterval(function () {
    console.log(clients.length)
}, 2000);
