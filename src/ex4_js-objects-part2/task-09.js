function lineInLine(str, str1, num) {
  let strToArr = str.split(/\s/);
  let arr = strToArr.splice(num + 1, 0, str1);
  let string = strToArr.join(' ');
  return string;
}
module.exports = lineInLine