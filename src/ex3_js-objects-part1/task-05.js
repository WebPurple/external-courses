'use strict';
function makeClone(object) {
    var clone = {};
    var key;
    for (key in object) {
        if (object.hasOwnProperty(key)) {
        clone[key] = object[key];
        }
    }
    return clone;
}
module.exports = makeClone;
