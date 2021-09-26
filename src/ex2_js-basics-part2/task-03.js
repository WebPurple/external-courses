function analyzeElementsArr(array) {
  let a = 0;
  let b = 0;
  let c = 0;
  array.forEach((item) => {
    if (typeof (item) === 'number') {
      if (!(item % 2) && item !== 0) {
        a += 1;
      } else if (item % 2) {
        b += 1;
      } else if (item === 0) {
        c += 1;
      }
    }
  });
  console.log(`Количество чётных элементов: ${a}, нечётных: ${b}`);
  console.log(`Количество нулей: ${c}`);
  return [a, b, c];
}

module.exports = analyzeElementsArr;
