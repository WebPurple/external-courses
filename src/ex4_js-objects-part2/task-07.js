function trimStr(str, num) {
  const newStr = str.split("");

  newStr[num - 1] = "…";

  return newStr.splice(0, num).join("");
}

module.exports = trimStr;
