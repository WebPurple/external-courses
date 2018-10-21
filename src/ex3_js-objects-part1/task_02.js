"use strict"; 

function objectProcessing( object ) {
    var key = null;
    for (key in object) {
        console.log('Ключ: ' + key + ', значение: ' + object[key] );
    }
};

module.exports = objectProcessing;