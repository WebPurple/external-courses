function checkLengthStr(str, num) {
  let str1 = "";
  if (str.length > num) {
    str1 = str.slice(0,num-1) + "…";
    return str1;
  } 
    return str;
};
module.exports = checkLengthStr;