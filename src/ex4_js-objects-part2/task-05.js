function checkSubString(str, subStr){
    if(str.indexOf(subStr)>=0){
        return true;
    }
    return false;
}
module.exports = checkSubString;