function сutStr(str, num) {
  if (str.length > num) {
    let result = str.substr(0, num - 1) + "…";
    return result;
  }

  return str;
}

module.exports = сutStr;
