function checkSubString(str, subStr){
    if(str.indexOf(subStr)>-1){
        return true;
    }
    return false;
}

module.exports = checkSubString;