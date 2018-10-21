"use strict"; 

function objectProcessing(object){
    var clone = {};
    for (var key in object ){
        clone[key] = object[key];
    }
    return clone;
}

module.exports = objectProcessing;