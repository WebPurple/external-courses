toUpperCaseSymb = function (str) {
    var newStr = str.toLowerCase();
    var firstSymb = newStr.charAt(0).toUpperCase();
    return firstSymb + newStr.slice(1);
}
module.exports = toUpperCaseSymb;