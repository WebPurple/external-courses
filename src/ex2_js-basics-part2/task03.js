/* eslint-disable linebreak-style */
// const arr = [1, 2, 3, 4, null, 5, 6, '*', 0];
function calcEvenOddZero(array) {
  const counter = [0, 0, 0];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (typeof element === 'number' && !Number.isNaN(element)) {
      if (element === 0) {
        counter[2] += 1;
      } else if (element % 2 === 0) {
        counter[0] += 1;
      } else {
        counter[1] += 1;
      }
    }
  }
  return counter;
}
module.exports = calcEvenOddZero;
