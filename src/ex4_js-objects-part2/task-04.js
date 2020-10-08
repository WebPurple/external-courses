function firstSymbolToUpperCase(str) {
  for (let i = 0; i < str.length; i++) {

    if (str[i] == " ") {
      continue;
    }

    return str[i].toUpperCase() + str.slice(i + 1);
  }
}

module.exports = firstSymbolToUpperCase;
