"use strict";

function arrayFunc(arr) {
    var check = false;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            check = true;
        } 
        
        return check;
    }
}

var a = arrayFunc([1, 1, 1, 1, 1]);
console.log(a);

//module.exports = arrayFunc;
