'use strict'

function invertString(somestring){
    let result = '';
    
    for (let ind in somestring){
        result = somestring[ind] + result;
    }
    
    return result;
}

module.exports = invertString;
