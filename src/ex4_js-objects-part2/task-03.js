const getStringWithoutSpases = (string) => {
  let result = string;

  if (string[0] === ' ') {
    result = result.slice(1);
  }

  if (string[string.length - 1] === ' ') {
    result = result.slice(0, result.length - 1);
  }
  return result;
};

module.exports = getStringWithoutSpases;
