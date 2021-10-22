function evenAndOdd(mas) {
  let countEven = 0;
  let countOdd = 0;
  let countZero = 0;
  const newMassive = [];
  mas.forEach((element) => {
    if (typeof element === 'number' && element !== 0) {
      if (element % 2 === 0) {
        countEven += 1;
      } else if (element % 2 !== 0) {
        countOdd += 1;
      }
    }
    if (element === 0) {
      countZero += 1;
    }
  });
  newMassive.push(countEven);
  newMassive.push(countOdd);
  newMassive.push(countZero);
  return newMassive;
}

module.exports = evenAndOdd;
