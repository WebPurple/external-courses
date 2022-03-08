const checkingNumbers = (ARRAY) => {
  const RESULT = [0, 0, 0];
  for (let i = 0; i < ARRAY.length; i += 1) {
    if (typeof (ARRAY[i]) === 'number') {
      if (ARRAY[i] === 0) {
        RESULT[2] += 1;
      } else if (ARRAY[i] % 2 === 0) {
        RESULT[0] += 1;
      } else {
        RESULT[1] += 1;
      }
    }
  }

  return RESULT;
};

module.exports = checkingNumbers;
