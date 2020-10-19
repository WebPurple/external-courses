function analogMap(array, callback) {
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    newArr.push(callback(array[i], i, array));
  }
  
  return newArr;
}

module.exports = analogMap;
