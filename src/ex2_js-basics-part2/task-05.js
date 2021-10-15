function maxElementArray(currentArray) {
  let maxElement = currentArray[0];

  for (let i = 0; i < currentArray.length; i += 1) {
    if (Number.isInteger(currentArray[i])) {
      if (currentArray[i] > maxElement) {
        maxElement = currentArray[i];
      }
    } else {
      return 'wrong array';
    }
  }

  return maxElement;
}

module.exports = maxElementArray;
