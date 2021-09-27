/* eslint-disable linebreak-style */
// const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1];

function checkEqualElements(array) {
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== array[0]) {
      return false;
    }
  }
  return true;
}

module.exports = checkEqualElements;
