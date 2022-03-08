const checkingNumbers = (array) => {
  const result = [0, 0, 0];

  for (let i = 0; i < array.length; i += 1) {
    if (typeof (array[i]) === 'number') {
      if (array[i] === 0) {
        result[2] += 1;
      } else if (array[i] % 2 === 0) {
        result[0] += 1;
      } else {
        result[1] += 1;
      }
    }
  }

  return result;
};

module.exports = checkingNumbers;
