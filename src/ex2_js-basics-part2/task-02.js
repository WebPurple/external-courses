var arrayTest = [3, 5, 2, 0];
function getCount(array) {
  array.forEach(function(item, index) {
    console.log(`Item#${index}: ${item}`);
  });
  console.log(`Array length: ${arr.length}`);
}
getCount(array);
module.exports = getCount;
