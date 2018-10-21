"use strict"; 

function objectProcessing(object, string){
    if (object.hasOwnProperty(string)) {
        object[string] = 'new';
    }

    return object;
}

module.exports = objectProcessing;