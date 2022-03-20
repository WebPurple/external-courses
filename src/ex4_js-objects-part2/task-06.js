const getUpperCaseString = (string) => {
  const copyString = string.split(' ');

  for (let i = 0; i < copyString.length; i += 1) {
    copyString[i] = copyString[i][0].toUpperCase(1) + copyString[i].slice(1);
  }

  return copyString.join(' ');
};

module.exports = getUpperCaseString;
