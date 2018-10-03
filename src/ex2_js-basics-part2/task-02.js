'use strict';

function dumpArray(myArray){
    
    var counter = 0;

    myArray.forEach(element => {
        counter++;
        console.log(element);
    });

    console.log(counter);
}

module.exports = dumpArray;