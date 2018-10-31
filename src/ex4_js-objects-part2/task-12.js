'use strict'

function sumAndRound(firstNumber, secondNumber){
    let result = Math.round((firstNumber + secondNumber)*1000)/1000;
    return result;
}

module.exports = sumAndRound;
