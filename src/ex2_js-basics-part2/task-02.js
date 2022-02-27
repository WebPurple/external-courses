function viewArr(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    console.log(arr[i]);
  }
  console.log(arr.length);
  // eslint-disable-next-line no-useless-return
  return;
}

module.exports = viewArr;
