'use strict';
function setNonExistedProperty(prop, obj) {
    if (prop in obj) {
        return obj;
    }
    obj[prop] = 'new';
    return obj;
};
module.exports = setNonExistedProperty;
