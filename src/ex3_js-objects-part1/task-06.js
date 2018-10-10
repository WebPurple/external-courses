'use strict';
function makeClone(obj) {
    var clone = {};
    var prop;
    for (prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            if (typeof obj[prop] === 'object') {
                clone[prop] = makeClone(obj[prop]);
            };
            clone[prop] = obj[prop];
        }
    }
    return clone;
};
module.exports = makeClone;