let arrayNumbers = [1, 2, 3, 4, 5, 10, 10];

function chekingArrayElements(arr) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      return console.log(true);
    }
  }
  return console.log(false);
}
module.exports = chekingArrayElements;
