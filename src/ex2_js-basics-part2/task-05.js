function maxNumber(massive) {
  let max = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < massive.length; i++) {
    if (massive[i] > max) {
      max = massive[i];
    }
  }
  return max;
}

module.exports = maxNumber;
