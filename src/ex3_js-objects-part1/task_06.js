"use strict"; 

function objectProcessing(object){
    var clone = {};
    var key;
    
    for (key in object ){
        clone[key] = object[key];
    }

    return clone;
}

module.exports = objectProcessing;