function getNumberOfRepetitions(string) {
  const splitString = string.split('');

  splitString.reduce(function(acc, el) {
    acc[el] = (acc[el] || 0) + 1;

    return acc;
  }, {});

  return 
}

module.exports = getNumberOfRepetitions;
