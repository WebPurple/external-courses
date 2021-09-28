let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function checkArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Element number ${i} : ${arr[i]}`);
  }
  console.log(`All amount elements : ${arr.length}`);
  return;
}
module.exports = checkArray;
