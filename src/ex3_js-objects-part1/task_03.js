"use strict"; 

function objectProcessing(object, string) {
    var present = false;
    var key;
    for(key in object){
        if (string === key) {
            present = true;
        }
    }

    return present; 
};

module.exports = objectProcessing;