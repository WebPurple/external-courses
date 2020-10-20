function analogSlice(arr, begin = 0, end = arr.length) {
  const result = [];

  if (begin > 0 && end < 0) {
    for (let i = begin; i < arr.length + end; i++) {
      if (arr[i] !== undefined) result.push(arr[i]);
    }

    return result;
  }
  if (begin < 0 || end < 0) {
    for (let i = arr.length + begin; i < arr.length + end; i++) {
      if (arr[i] !== undefined) result.push(arr[i]);
    }

    return result;
  }
  for (let i = begin; i < end; i++) {
    if (arr[i] !== undefined) result.push(arr[i]);
  }

  return result;
}

module.exports = analogSlice;
