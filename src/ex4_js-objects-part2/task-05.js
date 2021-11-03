function findString(str1, str2) {
  let index = 1;
  while (index < str1.length) {
    if (str2 === str1.slice(index, str1.length)) {
      return true;
    }
    index += 1;
  }
  return false;
}

module.exports = findString;
