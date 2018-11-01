'use strict'
function findPropertyInPrototype (nameProperty, obj) {
    if (!obj.hasOwnProperty(nameProperty) && nameProperty in obj) {
      return obj[nameProperty];
    }
    return undefined;
};
module.exports = findPropertyInPrototype;
