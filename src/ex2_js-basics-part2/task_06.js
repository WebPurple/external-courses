"use strict";

function evenOddNumber(number) {
    if (number >= 1000) {
        return 'Данные не верны';
    } else if (number % 2 == 0 && number !== 2) {
        return 'Число ' + number + ' составное'
    } else {
        return 'Число ' + number + ' простое'
    }
}

module.exports = evenOddNumber;