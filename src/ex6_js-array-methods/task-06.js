function analogReduce(arr, callback, intialValue) {
  let result = 0;

  if (intialValue !== undefined) {
    for (let i = 0; i < 1; i++) {
      result = callback(intialValue, arr[i], i, arr);
    }
    for (let i = 1; i < arr.length; i++) {
      result = callback(result, arr[i], i, arr);
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      result = callback(result, arr[i], i, arr);
    }
  }

  return result;
}

module.exports = analogReduce;
