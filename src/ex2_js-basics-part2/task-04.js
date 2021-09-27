const sameElementArray = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    if (array[0] !== array[i]) return false;
  }

  return true;
};

module.exports = sameElementArray;
