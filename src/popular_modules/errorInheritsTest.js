let util = require('util');

let phrases = {
    "Hello": "Привіт",
    "World": "Світ"
};

function PhraseError(message) {
    this.message = message;
    Error.captureStackTrace(this, PhraseError);
}

util.inherits(PhraseError, Error);
PhraseError.prototype.name = 'PhraseError';


function getPhrase(name) {
    if (!phrases[name]) {
        throw new PhraseError("No such word -> " + name);
    }
    return phrases[name];
}

function showMessage() {
    return util.format("%s %s!", getPhrase("Helo"), getPhrase("World"));
}

try {
    console.log(showMessage());
} catch (e) {
    if (e instanceof PhraseError) {
        console.error("Error name-> " + e.name);
        console.error("Error message -> " + e.message);
        console.error("Error stack -> " + e.stack);
    } else {
        console.trace(e);
    }
}
