function uppStr(str) {
  let arr = str.split(" ");
  let newStr = "";
  for (key in arr) {
    if (arr.hasOwnProperty(key)) {
    newStr += arr[key].charAt(0).toUpperCase() + arr[key].slice(1) + " ";
    }
  }
  return newStr.trim();
};
module.exports = uppStr;