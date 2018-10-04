"use strict";

function arrayProcessing(arr) {
    var _even = 0, _odd = 0, _zero = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            _even += 1;
        } else {
            _odd += 1;
        } if (arr[i] === 0){
            _zero += 1;
        }    
    }
    return 'четных: ' + _even + '; ' + 'нечетных: ' + _odd + '; ' + 'ноль: ' + _zero + ';'
}

module.exports = arrayProcessing;