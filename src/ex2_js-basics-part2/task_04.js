"use strict";

function arrayFunc(arr) {
    var check = false;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            check = true;
        } 
        if (check) {
            return 'true';
        } else {
            return 'false';
        }     
    }
}

module.exports = arrayFunc;
