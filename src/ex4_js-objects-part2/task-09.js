'use strict'
function taskNine(str1, str2, num) {
    var arr = str1.split(' ');
    arr.splice(num + 1, 0, str2);
    return arr.join(' ');
};
module.exports = taskNine;
