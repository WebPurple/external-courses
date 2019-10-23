'use strict';
function deleteFirstAndLastSpacesInString(string) {
    let newString = string.slice(1, -1);
    return newString;
}
module.exports = deleteFirstAndLastSpacesInString;