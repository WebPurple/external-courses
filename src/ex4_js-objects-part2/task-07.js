function trimStr(str, num) {
  let newStr = "";

  for (let i = 0; i <= num; i++) {
    if (i + 1 == num) {
      return newStr + "…";
    }

    newStr += str[i];
  }

  return newStr;
}

module.exports = trimStr;
