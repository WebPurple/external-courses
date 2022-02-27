function evenOdd(arr) {
  let even = 0;
  let odd = 0;
  let zero = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (!isNaN(arr[i])) {
      if (typeof (arr[i]) === 'number') {
        if (arr[i] === 0) {
          zero += 1;
        } else
        if ((arr[i] % 2) === 0) {
          even += 1;
        } else {
          odd += 1;
        }
      }
    }
  }
  return [even, odd, zero];
}

module.exports = evenOdd;
