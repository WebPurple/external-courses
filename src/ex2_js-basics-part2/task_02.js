"use strict";

function arrayOutput(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log('Total number of array elements: ' + arr.length);
}

module.exports = arrayOutput;