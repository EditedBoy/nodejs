const server = require('./server');

const Event = require('../entity/event');
const event_1 = new Event();
event_1.showEvent();


const lodash = require('lodash');
lodash.castArray();

const db = require('../db/db');
db.connect();
console.log('Author -> ' + db.getPhrase('Author'));


let logger = require('../common/logger')(module);

logger("Logger in action");

