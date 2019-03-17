const funcForString = require('./string_utils');

function forCamelCase(str) {
    var wordsArr = str.split(" ");
    var newStr = wordsArr[0].toLowerCase();
    for (var i = 1; i < wordsArr.length; i++){
        newStr += funcForString.toUpperCaseSymb(wordsArr[i]);
    }
    return newStr;
}
module.exports = forCamelCase

