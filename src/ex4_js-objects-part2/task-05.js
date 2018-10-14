'use strict'

function isStrIn(firstString, secondString){
    return firstString.indexOf(secondString) > -1 && !(secondString === '');
}

module.exports = isStrIn;
