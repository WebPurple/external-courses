function wordToUpperCase(str) {
  return str.replace(/(^|\s)\S/g, (a) => {
    return a.toUpperCase();
  });//взять все символы не пустого пространства в начале строки или после пробела
}

module.exports = wordToUpperCase;
