function countNumbers(array) {
  let evenNumbers = 0;
  let oddNumbers = 0;
  let zeroNumbers = 0;

  for (const i of array) {//eslint-disable-line
    if (i % 2 === 0 && typeof i === 'number' && i !== 0) {
      evenNumbers += 1;
    }
    if (i % 2 !== 0 && typeof i === 'number' && i !== 0) {
      oddNumbers += 1;
    }
    if (i === 0 && typeof i === 'number') {
      zeroNumbers += 1;
    }
  }

  const arrayOfNumbers = [evenNumbers, oddNumbers, zeroNumbers];

  return arrayOfNumbers;
}

module.exports = countNumbers();
