function analogSlice(arr, begin = 0, end = arr.length) {
  const result = [];

  if (begin < 0 && end < 0) {
    arr.reverse();
    for (let i = Math.abs(begin) - 1; i >= Math.abs(end); i--) {
      result.push(arr[i])
    }

    return result;
  }
  for (let i = begin; i < end; i++) result.push(arr[i]);

  return result;
}

module.exports = analogSlice;
