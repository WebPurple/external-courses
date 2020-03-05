let arrayNumders = [3, 6, 10, 15, 30, 0, 121];
function getMaxNumber(arr) {
  let maxNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}
getMaxNumber(arr);
module.exports = getMaxNumber;
