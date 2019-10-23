'use strict';
function toUpperCase(string) {
    let array = string.split(' ');
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].slice(0, 1).toUpperCase() + array[i].slice(1);
    }
    return array.join(' ');
}
module.exports = toUpperCase;