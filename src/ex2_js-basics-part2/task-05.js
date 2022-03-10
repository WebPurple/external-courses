const returnMaxNumber = (array) => {
  let max = array[0];

  for (let i = 0; i < array.length; i += 1) {
    if (max < array[i]) {
      max = array[i];
    }
  }

  return max;
};

module.exports = returnMaxNumber;
