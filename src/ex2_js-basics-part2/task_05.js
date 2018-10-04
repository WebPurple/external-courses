"use strict";

function maxElementArray(arr) {
    var max = 0;
    var i;
    for (i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return 'Maximum array element: ' + max;
}

module.exports = maxElementArray;