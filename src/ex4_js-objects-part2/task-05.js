'use strict'
function findString(str1, str2) {
    if (!str1) return false;
    if (~str1.indexOf(str2)) {
        return true;
    }
    return false;
};
module.exports = findString;