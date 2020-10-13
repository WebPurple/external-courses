function firstSymbolToUpperCase(str) {
  str.trim();
  return String(str[0].toUpperCase() + str.slice(1));
}

module.exports = firstSymbolToUpperCase;
