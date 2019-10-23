'use strict';
function addStringInStringAfterNumberOfWorld(firstString, secondString, numberWord) {
    let array = firstString.split(" ");
    array.splice(numberWord + 1, 0, secondString);
    return array.join(" ");
}
module.exports = addStringInStringAfterNumberOfWorld; 