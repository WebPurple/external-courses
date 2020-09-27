"use strict"

function isAllEquals(inputArray){

    let counter = 0;

    inputArray.forEach(element => {

        if (element === inputArray[0]){
            ++counter;
        }
            
    });

    return counter === inputArray.length ? true : false;
}

module.exports = isAllEquals;