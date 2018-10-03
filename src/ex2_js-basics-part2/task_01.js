"use strict";

function valueCheck(value) {
    if (typeof(value) !== 'number' && typeof(value) !== 'string'){
        return 'undefined';
    } else if (!isNaN(value)) {
        return value + ' - is number';
    } else {
        return value + ' - is string';
    } 
}

module.exports = valueCheck;