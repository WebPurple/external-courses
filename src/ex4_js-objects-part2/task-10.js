const getReversedString = (string) => {
  let result = '';

  for (let i = string.length - 1; i >= 0; i -= 1) {
    result += string[i];
  }

  return result;
};

module.exports = getReversedString;
