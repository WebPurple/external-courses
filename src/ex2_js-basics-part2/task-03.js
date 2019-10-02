'use strict';

function diffElements(arr) {
  let retArr = [0, 0, 0]; //Arr return from function with the number of zero, odd and even elements of entered arr
  for (let i = 0; i < arr.length; i++) {
    if (typeof (arr[i]) !== 'number' || arr[i] === NaN || arr[i] === Infinity || arr[i] === null || arr[i] === undefined) {
      continue;
    }
    if (arr[i] === 0) {
      retArr[2]++;
    } else if (arr[i] % 2 === 0) {
      retArr[0]++
    };
    if (arr[i] % 2 !== 0) {
      retArr[1]++
    };
    console.log(arr[i]);
  }
  return retArr;
}
module.exports = diffElements;