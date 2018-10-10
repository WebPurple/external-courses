'use strict';
function setNonExistedProperty(prop, obj) {
   var clone;
   if (obj.hasOwnProperty(prop)) {
    if (prop in obj) {
        return obj;
    }
   };
    clone = obj;
    clone[prop] = 'new';
    return clone;
};
module.exports = setNonExistedProperty;
