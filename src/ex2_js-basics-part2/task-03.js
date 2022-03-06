const printOddEvenZero = (array) => {
  const result = [0, 0, 0];
  const arrayOfNum = array.filter((item) => typeof (item) === 'number');

  for (let i = 0; i < arrayOfNum.length; i += 1) {
    if (arrayOfNum[i] === 0) {
      result[2] += 1;
    } else if (arrayOfNum[i] % 2 === 0) {
      result[0] += 1;
    } else {
      result[1] += 1;
    }
  }

  return result;
};

module.exports = printOddEvenZero;
