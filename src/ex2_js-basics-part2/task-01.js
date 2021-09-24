'use strict'

function NumberOrString (taken) {
    if ((typeof taken === 'number') && (!isNaN(taken))) {
        return('number');
    } else if (typeof taken === 'string') {
        return('string');
    }  else {
        return(undefined);
    }
}

module.exports = NumberOrString;
