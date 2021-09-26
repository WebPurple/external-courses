function showElementArr(array) {
  array.forEach((item) => {
    console.log(`Элемент: ${item}`);
  });
  return console.log(`Общее количество элементов в массиве: ${array.length}`);
}
module.exports = showElementArr;
