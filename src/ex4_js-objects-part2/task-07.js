function cutString (str, lengthOfString){
    let newStr = str;
    if (newStr.length>lengthOfString){
        newStr = newStr.substring(0,lengthOfString-1)+"…";
        return newStr;
    }
    return undefined
}
module.exports = cutString;