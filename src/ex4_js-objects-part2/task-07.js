function сutStr(str, num) {
  let result = '';

  if (str.length > num) {
    result = str.substr(0, num - 1) + "…";
  }

  return result;
}

module.exports = сutStr;
