'use strict'

function checkForProperty(prop, obj){
    let result = undefined;
    if (prop in obj.__proto__){
        result = 1;
    }
    return result;
}

module.exports = checkForProperty;
