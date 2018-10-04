"use strict";

function valueCheck(value) {
    var result;

    if (typeof(value) !== 'number' && typeof(value) !== 'string'){
        result = 'undefined';
    } else if (!isNaN(value)) {
        result = value + ' - is number';
    } else {
        result = value + ' - is string';
    } 

    return result;
}

module.exports = valueCheck;