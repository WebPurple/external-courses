function countElements(array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(array[i]);
  }
  console.log(`Общее число элементов массива:${array.length}`);
  return undefined;
}

module.exports = countElements();
