const getReversedString = (string) => {
  const stringToArray = string.split('');

  return stringToArray.reverse().join('');
};

module.exports = getReversedString;
