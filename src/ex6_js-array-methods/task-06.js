function analogReduce(array, callback, initialValue) {
  let result = 0;
  let newArray = array.slice();
  let previousValue = newArray[0];
  let i = 1;
  
  if (initialValue !== undefined) {
    newArray.unshift(initialValue);
    previousValue = initialValue;
    i = 0;
  }
  
  for (let key = 0; key < newArray.length - 1; key++) {
    let currentItem = newArray[key+1];
    
    result = callback(previousValue, currentItem, i, array);
    i++;
    previousValue = result;
  }
  
  return result;
}

module.exports = analogReduce;
