'use strict';
function hasProperty(prop, object) {
    if (prop in object) {
        return true;
    }
    return false;
};
module.exports = hasProperty;