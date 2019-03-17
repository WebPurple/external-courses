function trimToPosition(str, num) {
    var newStr;
    if (str.length > num) {
        newStr = str.slice(0, num - 1) + "\u2026";
    } else {
        newStr = str;
    }
    return newStr;
}
module.exports = trimToPosition
