function sameItem(arr) {
  let value;
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[0] === arr[i]) {
      value = true;
    } else return false;
  }
  return value;
}

module.exports = sameItem;
