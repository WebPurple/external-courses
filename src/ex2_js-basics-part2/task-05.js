'use strict';

function findMax(someArray){

    var max = someArray[0];
    var i;
    
    for (i = 1; i < someArray.length; i++){
        if (someArray[i] > max){
             max = someArray[i];
        }
    }

    return max;
}

module.exports = findMax;
