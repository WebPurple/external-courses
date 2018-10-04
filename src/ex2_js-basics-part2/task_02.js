"use strict";

function arrayOutput(arr) {
    var i;
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log('Total number of array elements: ' + arr.length);
}

module.exports = arrayOutput;