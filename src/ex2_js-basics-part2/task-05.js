let arrayNumbers = [1, 3, 2, 5, 7, 2, 87],
  max = 0;
function maxValue(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      max = arr[i + 1];
    }
  }
  return console.log(max);
}
module.exports = maxValue;
