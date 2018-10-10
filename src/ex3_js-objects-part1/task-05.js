'use strict';
function makeClone(object) {
    var clone = {};
    var key;
    for (key in object) {
        if (obj.hasOwnProperty(key)) {
        clone[key] = object[key];
        }
    }
    return clone;
};
module.exports = makeClone;
