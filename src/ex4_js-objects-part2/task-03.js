function returnStrWithoutSpaces(str){
    let resultStr;
    resultStr = str.trimRight();
    resultStr = resultStr.trimLeft();
    return resultStr;
}
module.exports = returnStrWithoutSpaces;