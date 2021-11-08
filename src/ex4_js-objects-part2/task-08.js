function toCamelCase(str) {
  const newStr = str.split(' ');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < newStr.length; i++) {
    if (i === 0) {
      newStr[i] = newStr[i].toLowerCase();
    } else {
      newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1).toLowerCase();
    }
  }
  return newStr.join('');
}

module.exports = toCamelCase;
