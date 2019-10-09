function raiseStr(str) {
  let str1 = ""; 
  str1 = str.charAt(0).toUpperCase() + str.slice(1);
  return (str1)
};
module.exports = raiseStr;