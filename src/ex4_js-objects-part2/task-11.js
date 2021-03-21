function getNumberOfRepetitions(string) {
  const splitString = string.split('');

  const result = splitString.reduce(function(summary, elem) {
    summary[elem] = (summary[elem] || 0) + 1;

    return summary;
  }, {});

  return result;
}

module.exports = getNumberOfRepetitions;
