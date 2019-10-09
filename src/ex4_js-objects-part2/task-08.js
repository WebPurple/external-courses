function converStrCamel(str) {
  let arr = str.split(" ");
  let newStr = arr[0].toLowerCase();
  for (var i = 1; i < arr.length; i++) {
    newStr += arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
  }
  return newStr;
};
module.exports = converStrCamel;
