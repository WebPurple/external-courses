'use strict';

function code(myArray){
    
    var counter = 0;

    myArray.forEach(element => {
        counter++;
        console.log(element);
    });

    console.log(counter);
}
