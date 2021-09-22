function CountOddEvenZero(array) {
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

  let str = `четных: ${even}; нечетных: ${odd};`;
  if (zero) str += ` нуль: ${zero};`;
  console.log(str);

  return [even, odd, zero];
}

module.exports = CountOddEvenZero;
