function upFirstChar (str){
    let newStr = str[0].toUpperCase()+str.slice(1);
    return newStr;
}
module.exports = upFirstChar;