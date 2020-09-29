function checkEvenArray(array) {
  const result = [0, 0, 0];

  for (let elem of array) {
    if (elem === null || typeof (elem) === 'string') {
      delete elem;
    }
    if (elem == 0) {
      delete elem;
      result[2]++;
    }
    if (elem % 2 == 0) result[0]++;
    if (elem % 2 == 1) result[1]++
  }

  return result;
}


module.exports = checkEvenArray;