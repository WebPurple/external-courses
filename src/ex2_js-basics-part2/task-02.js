function showArrayItems(arr) {
  arr.forEach(item => console.log(item));
  console.log(`Общее количество элементов: ${arr.length}`);
}

module.exports = showArrayItems;