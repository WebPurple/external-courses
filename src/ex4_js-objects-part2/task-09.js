const getNewString = (string, key, index) => {
  const copyString = string.split(' ');

  return `${copyString.slice(0, index + 1).join(' ')} ${key} ${copyString.slice(index + 1, string.lenght).join(' ')}`;
};

module.exports = getNewString;
