function ShowElementArray(array) {
  array.forEach((value) => {
    console.log(`Текущее значение: ${value}`);
  });
  console.log(`Общее количество: ${array.length}`);
}

module.exports = ShowElementArray;
