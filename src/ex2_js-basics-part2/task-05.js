function maxValue(yourArray) {
  let max = 0;
  for (let i = 0; i < yourArray.length; i += 1) {
    if (yourArray[i] >= 0) {
      if (yourArray[i] > max) {
        max = yourArray[i];
      }
    }
  }
  return max;
}

module.exports = maxValue;
