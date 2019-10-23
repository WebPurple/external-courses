'use strict';
function getShortString(string, number) {
    let newString = string;
    if(string.length > number) {
        newString = string.substr(0, number - 1) + '…';
    }
    return newString; 
}
module.exports = getShortString;