"use strict"; 

function myFunction(string, substring){
    var result = false;
    
    if (string.indexOf(substring) !== -1) {
        result = true;
    } 
    
    return result;
}

module.exports = myFunction;