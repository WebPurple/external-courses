/* eslint-disable no-param-reassign */
const sliceCopy = (array, begin = 0, end = array.length) => {
  const copyArray = [];

  if (begin < 0) {
    if (array.length < Math.abs(begin)) {
      begin = 0;
    } else {
      begin = array.length + begin;
    }
  }

  if (end < 0) {
    end = array.length + end;
  }

  if (end > array.length) {
    end = array.length;
  }

  for (let i = begin; i < end; i += 1) {
    copyArray.push(array[i]);
  }

  return copyArray;
};

module.exports = sliceCopy;
