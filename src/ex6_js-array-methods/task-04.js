function analogFilter(array, callback) {
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArr.push(array[i]);
    }
  }
  
  return newArr;
}

module.exports = analogFilter;
