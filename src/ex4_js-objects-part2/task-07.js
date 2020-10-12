function сutStr(str, num) {
  if (str.length > num) {
    return str.substr(0, num - 1) + "…";
  }

  return str;
}

module.exports = сutStr;
