function strToLowerCamalCase(str) {
  const arrStr = str.toLocaleLowerCase().split(" ");
  const arrNewStr = [];

  for (let i = 0; i < arrStr.length; i++) {
    arrNewStr[i] = arrStr[i][0].toUpperCase() + arrStr[i].slice(1);
  }

  return arrNewStr[0].toLocaleLowerCase() + arrNewStr.slice(1).join("");
}

module.exports = strToLowerCamalCase;
