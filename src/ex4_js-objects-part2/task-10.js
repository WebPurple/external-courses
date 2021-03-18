function invertedLine(str) {
  let strArr = str.split('');
  let invertArray = strArr.reverse();
  let arrStr = invertArray.join('');
  return arrStr;
}
module.exports = invertedLine;
