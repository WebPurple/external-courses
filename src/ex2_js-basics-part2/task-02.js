function outputArray(array) {
  let summElement = 0;
  for (let i = 0; i < array.length; i += 1) {
    console.log(array[i]);
    summElement += 1;
  }
  console.log(`Кол-во элементов: ${summElement}`);
}

module.exports = outputArray;
