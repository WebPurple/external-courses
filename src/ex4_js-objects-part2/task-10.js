function returnInvertedStr(str) {
  let newStr = "";
  newStr = str.split('').reverse().join('');
  return newStr;
};
module.exports = returnInvertedStr;
