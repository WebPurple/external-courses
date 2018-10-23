"use strict"; 

function myFunction(string, char){
    var result = 0;
    var i = null;
    for (i = 0; i<string.length; i++){
        if(string[i] === char) {
            result++;
        }
    }
    return result;
}

module.exports = myFunction;