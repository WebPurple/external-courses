function addStr(str1, str2, num) {
  let arr = str1.split(" ");
  arr.splice(num + 1, 0, str2)
  let newStr = arr.join(" ")
  return newStr;
};
module.exports = addStr;