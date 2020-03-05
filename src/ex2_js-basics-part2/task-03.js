let arrayTest = [6, 2, 3, 12, 0];
function getSort(array) {
  let even = 0;
  let odd = 0;
  let zeros = 0;
  array.forEach(function(item) {
    if (item % 2 === 0) {
      even++;
    }
    if (item % 2 !== 0) {
      odd++;
    }
    if (item === 0) {
      zeros++;
    }
  });
  return [even, odd, zeros];
}
getSort(array);
module.exports = getSort;
