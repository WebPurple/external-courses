'use strict';
function returnReverseString(string) {
    let array = string.split('');
    return array.reverse().join('');
}
module.exports = returnReverseString; 