/* eslint-disable linebreak-style */
// const arr = [1, 25, 6532, 11, 1111];

function findMaxValue(array) {
  let max = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
}

module.exports = findMaxValue;
