'use strict'
function cutString(str, num) {
    if (str.length > num) {
        return str.slice(0, num - 1) + '…';
    }
    return false;
};
module.exports = cutString;
