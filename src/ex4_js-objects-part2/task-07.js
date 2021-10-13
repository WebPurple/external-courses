const searchStr = (str, position) => {
  let newStr = '';

  if (position < str.length) {
    newStr = str.slice(0, position - 1) + ['…'];
  }

  return newStr;
};

module.exports = searchStr;
