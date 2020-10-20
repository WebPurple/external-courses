function analogReduce(arr, callback, intialValue) {
  let result = intialValue;

  if (intialValue === undefined){
    result = arr[0];

    for (let i = 1; i < arr.length; i++) {
      result = callback(result, arr[i], i, arr);
    }

    return result
  }

  for (let i = 0; i < arr.length; i++) {
    result = callback(result, arr[i], i, arr);
  }

  return result;
}

module.exports = analogReduce;
