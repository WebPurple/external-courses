'use strict';
function setNonExistedProperty(prop, obj) {
    if (prop in obj) {
        return obj;
    }
    object[prop] = 'new';
    return obj;
};
module.exports = setNonExistedProperty;