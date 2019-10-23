'use strict';
function toLowerCamelCase(string) {
    let array = string.split(" ");
    array[0] = array[0].toLowerCase();
    for (let i = 1; i < array.length; i++) {
        array[i] = array[i].slice(0, 1).toUpperCase() + array[i].slice(1).toLowerCase();
    }
    return array.join("");
}
module.exports = toLowerCamelCase;