const funcForString = require('./string_utils');
function toUpperCaseEveryFirstSymb(str) {
    var wordsArr = str.split(" ");
    var newStr = "";
    wordsArr.forEach(elem => {
        newStr += " " +funcForString.toUpperCaseSymb(elem);
    });
    return newStr.trim();
}
module.exports = toUpperCaseEveryFirstSymb


