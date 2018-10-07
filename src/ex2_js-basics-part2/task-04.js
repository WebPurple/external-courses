'use strict';

function isSame(someArray){

    var result = true;

    var i = 1;
    
    while(result && i<someArray.length){
        if (someArray[i] !== someArray[0]){
            result = false;
        }
        i++;
    }

    return result;
}

module.exports = isSame;
