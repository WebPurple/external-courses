'use strict'

function countSymbols(somestring){
    let symbols = {};

    for (let ind in somestring){
        if (symbols[somestring[ind]] === undefined){
            symbols[somestring[ind]] = 1;
        } else {
            symbols[somestring[ind]] ++;
        }
    }

    for (let ind in symbols){
        console.log(ind + ' - ' + symbols[ind]);
    }
}

module.exports = countSymbols;
