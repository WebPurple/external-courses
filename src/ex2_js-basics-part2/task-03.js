function getTotalOfEvenOddElements(array) {
  var result = [0, 0, 0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      result[2]++;
    } else if (array[i] % 2 !== 0) {
      result[1]++;
    } else if (array[i] % 2 === 0 && array[i] !== null) {
      result[0]++;
    }
  }
  return result;
}

module.exports = getTotalOfEvenOddElements;