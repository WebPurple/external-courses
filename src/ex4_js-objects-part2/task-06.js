'use strict'

function capitalizeEveryWord(someString){
    let result = someString[0].toUpperCase();
    if (someString.indexOf(' ') !== -1){
        result += someString.substr(1, someString.indexOf(' '));
        result += capitalizeEveryWord(someString.substring(someString.indexOf(' ')+1));
    } else {
        result += someString.substring(1);
    }
    return result;
}

module.exports = capitalizeEveryWord;
