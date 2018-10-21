"use strict"; 

function objectProcessing(string, object){
    var property = string;
    var clone = object;
    if (!clone.hasOwnProperty(property)) {
        clone[property] = 'new';
    }

    return clone;
}

module.exports = objectProcessing;