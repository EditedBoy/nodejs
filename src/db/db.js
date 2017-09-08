let phrases;
exports.connect = function () {
    phrases = require('./properties.json')
};

exports.getPhrase = function (name) {
    if (!phrases[name]) {
        throw new Error("There is no phrase with name: " + name);
    } else {
        return phrases[name];
    }
};


