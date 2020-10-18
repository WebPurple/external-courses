function analogMap(array, callback) {
  let newArr = [];
  let keyNewArr = 0;
  
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    
    newArr[keyNewArr] = callback(item, i, array);
    keyNewArr++;
  }
  
  return newArr;
}

module.exports = analogMap;
