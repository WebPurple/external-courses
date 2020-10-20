function analogReduce(arr, callback, intialValue) {
  let result = arr[0];

  if (intialValue !== undefined) {
    result = callback(intialValue, arr[0], 0, arr);
  }

  for (let i = 1; i < arr.length; i++) {
    result = callback(result, arr[i], i, arr);
  }

  return result;
}

module.exports = analogReduce;
