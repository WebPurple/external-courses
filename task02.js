/* eslint-disable linebreak-style */
// const arr = ['string1', 2, 3, 'string4', 5, 6, 7];

function printArray(array) {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  console.log(array.length);
}

module.exports = printArray;
