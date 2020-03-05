let arrayTest = [5, 5, 5, 5, 5];
function checkElements(arr) {
  let a = true;
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      break;
    }
    if (arr[i] !== arr[i + 1]) {
      a = false;
      break;
    }
  }
  return a;
}
checkElements(arr);
module.exports = checkElements;
