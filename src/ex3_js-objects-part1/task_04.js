"use strict"; 

function objectProcessing(object, string){
    if (!(string in object)) {
        object[string] = 'new';
    } 
      
    return object;
}

module.exports = objectProcessing;