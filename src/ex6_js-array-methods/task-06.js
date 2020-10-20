function analogReduce(arr, callback, intialValue) {
  let result = arr[0];
  let i = 1;

  if (intialValue !== undefined) {
    result = intialValue;
    i = 0;
  }

  for (i; i < arr.length; i++) {
    result = callback(result, arr[i], i, arr);
  }

  return result;
}

module.exports = analogReduce;
