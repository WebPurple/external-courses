let arrayNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0, 0];

function countEvenOdd(arr) {
  let countOdd = 0,
    countEven = 0,
    countZero = 0,
    arrayCountedNumber = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      countZero++;
    }
    if (arr[i] % 2 == 0 && arr[i] != 0) {
      countEven++;
    }
    if (arr[i] % 2 != 0 && isNaN(arr[i]) != true) {
      countOdd++;
    }
  }
  arrayCountedNumber.splice(0, 0, countEven, countOdd, countZero);

  console.log(arrayCountedNumber);
  return;
}
module.exports = countEvenOdd;