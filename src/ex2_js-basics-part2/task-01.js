'use strict';

function NumberOrString(taken) {
    let typeNumber;
    if ((typeof taken === 'number') && (!isNaN(taken))) {
        typeNumber = 'number';
    } else if (typeof taken === 'string') {
        typeNumber = 'string';
    } else {
        typeNumber = undefined;
    }
    return typeNumber;
}

module.exports = NumberOrString;
