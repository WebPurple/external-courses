function analogSlice(arr, begin = 0, end = arr.length) {
  const result = [];

  if (begin < 0 && end < 0) {
    arr.reverse();
    for (let i = Math.abs(end); i < Math.abs(begin); i++) result.push(arr[i]);

    return result.reverse();
  }
  if (begin < 0) {
    arr.reverse();
    for (let i = 0; i < Math.abs(begin); i++) result.push(arr[i]);

    return result.reverse();
  }

  for (let i = begin; i < end; i++) result.push(arr[i]);

  return result;
}

module.exports = analogSlice;
