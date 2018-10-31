'use strict'

function lowerCamelCase(somestring, flag){
    let result = somestring[0].toLowerCase() + somestring.substring(1);
    while (result.indexOf(' ') > 0){
        result = result.substr(0, result.indexOf(' ')) + result[result.indexOf(' ')+1].toUpperCase() + result.substring(result.indexOf(' ')+2);
    }
    return result;
}

module.exports = lowerCamelCase;
