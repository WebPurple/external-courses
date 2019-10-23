'use strict';
function firstLetterToUpperCase(string) {
    let newString = string.slice(0, 1).toUpperCase() + string.slice(1);
    return newString;
}
module.exports = firstLetterToUpperCase; 