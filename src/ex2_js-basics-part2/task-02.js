/* eslint-disable no-useless-return */
const logArrayInConsole = (array) => {
  if (array.length === 0) {
    console.log('Array is empty');
  } else {
    for (let i = 0; i < array.length; i += 1) {
      console.log(array[i]);
    }
  }

  console.log(array.length);

  return;
};

module.exports = logArrayInConsole;
