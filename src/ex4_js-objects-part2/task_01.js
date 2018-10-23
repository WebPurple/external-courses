"use strict"; 

function myFunction(propName, object) {
    var present = false;
    var key = null;
    for(key in object){
        if (propName === key) {
            present = true;
        }
    }

    return present; 
}

module.exports = myFunction;