'use strict'

function deleteSpaces(someString){
    let result = someString.substring(0, someString.indexOf(' '));
    result += someString.substring(someString.indexOf(' ')+1, someString.lastIndexOf(' '));
    result += someString.substring(someString.lastIndexOf(' ')+1);
    return result;
}

module.exports = deleteSpaces;
