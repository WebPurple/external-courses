function analogSlice(array, begin, end) {
  let newArray = [];
  let newBegin = begin;
  let newEnd = end;
  let newKey = 0;
  
  if (begin === undefined) {
    newBegin = 0;
  }
  
  if (begin < 0) {
    newBegin += array.length;
  }
  
  if (end === undefined) {
    newEnd = array.length;
  }
  
  if (end < 0) {
    newEnd += array.length;
  }
  
  for (let key = newBegin; key < newEnd; key++) {
    newArray[newKey] = array[key];
    newKey++;
  }
  
  return newArray;
}

module.exports = analogSlice;
