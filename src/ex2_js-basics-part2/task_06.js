"use strict";

function evenOddNumber(number) {
    var result;
    
    if (number >= 1000) {
        result = 'Данные не верны';
    } else if (number % 2 === 0 && number !== 2) {
        result = 'Число ' + number + ' составное';
    } else {
        result = 'Число ' + number + ' простое';
    }
    
    return result;
}

module.exports = evenOddNumber;