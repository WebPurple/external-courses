const toUpperCaseSymb = require('./task-04.js');

function toUpperCaseEveryFirstSymb(str) {
    var wordsArr = str.split(" ");
    var newStr = "";
    wordsArr.forEach(elem => {
        newStr += " " +toUpperCaseSymb(elem);
    });
    return newStr.trim();
}
module.exports = toUpperCaseEveryFirstSymb

