"use strict"; 

function objectProcessing(string, object){
    var property = string;
    if (!object.hasOwnProperty(property)) {
        object[property] = 'new';
    }

    return object;
} 

module.exports = objectProcessing;