function insertSubstrInStr(str, substr, numb) {
    var wordsArr = str.split(" ");
    var newStr = "";
    var counterWorlds = 0;
    for (var i = 0; i < wordsArr.length; i++){

        if (i === 0) {
            newStr += wordsArr[i];
        } else{
            newStr += " " + wordsArr[i];
        }
        if (wordsArr[i] !== "") {
            if (counterWorlds++ === numb) {
                newStr += " " + substr;
            }
        }
    }
    return newStr;
}
module.exports = insertSubstrInStr
