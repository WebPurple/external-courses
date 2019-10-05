function cutString (str, lengthOfString){//eslint-disable-line consistent-return
    if (str.length>lengthOfString){
        str = str.substring(0,lengthOfString-1)+"…";//eslint-disable-line no-param-reassign
        return str;
    }
}
module.exports = cutString;