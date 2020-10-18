function analogFilter(array, callback) {
  let newArr = [];
  let keyNewArr = 0;
  
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    
    if (callback(item, i, array) === true) {
      newArr[keyNewArr] = array[i];
      keyNewArr++;
    }
  }
  
  return newArr;
}

module.exports = analogFilter;
