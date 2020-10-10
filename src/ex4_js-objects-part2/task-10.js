function reverseString(str) {
  const result = str.split("").reverse().join('');

  return result;
}

module.exports = reverseString;