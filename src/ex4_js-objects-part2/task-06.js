function wordToUpperCase(str) {
  const arrStr = str.split(" ");
  const arrNewStr = [];

  for (let i = 0; i < arrStr.length; i++) {
    arrNewStr[i] = arrStr[i][0].toUpperCase() + arrStr[i].slice(1);
  }

  return arrNewStr.join(" ");
}

module.exports = wordToUpperCase;
