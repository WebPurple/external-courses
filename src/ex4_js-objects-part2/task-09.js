function insertWord(str, insertStr, index) {
  const arrOfWords = str.split(' ');
  arrOfWords.splice(index + 1, 0, insertStr);
  return arrOfWords.join(' ');
}

module.exports = insertWord;
