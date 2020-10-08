function strToLowerCamalCase(str) {
  const newStr = str.toLowerCase().trim(),
  const newStrUpperCase = newStr.replace(/\s\S/g, (a) => {
    return a.toUpperCase();
  }); // выбрал каждый первый символ после пробела и перевел в верхний регистр

  return newStrUpperCase.replace(/\s/g, ""); // заменил каждый пробел на пустую строку
}

module.exports = strToLowerCamalCase;
