toUpperCaseSymb = function (str) {
    var newstr = str.toLowerCase();
    var firstSymb = newstr.charAt(0).toUpperCase();
    return firstSymb + newstr.slice(1);
}
module.exports = toUpperCaseSymb;