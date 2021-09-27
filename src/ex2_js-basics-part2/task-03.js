function countOddEvenZero(array) {
  let zero = 0;
  let odd = 0;
  let even = 0;

  array.forEach((value) => {
    if (typeof (value) === 'number') {
      if (value === 0) {
        zero += 1;
      } else if (value % 2) {
        odd += 1;
      } else {
        even += 1;
      }
    }
  });

  console.log(`четных: ${even}; нечетных: ${odd}; нуль: ${zero};`);

  return [even, odd, zero];
}

module.exports = countOddEvenZero;
