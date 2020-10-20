function analogSlice(array, begin, end) {
  let newArray = [];
  let newBegin = begin || 0;
  let newEnd = end;
  
  if (begin < 0) {
    if (begin < -array.length) {
      newBegin = -array.length;
    }
    
    newBegin += array.length;
  }
  
  if (begin > array.length) {
    return [];
  }
  
  if (end === undefined) {
    newEnd = array.length;
  }
  
  if (end < 0) {
    if (end < -array.length) {
      newEnd = -array.length;
    }
    
    newEnd += array.length;
  }
  
  if (end > array.length) {
	  newEnd = array.length;
  }
  
  for (let key = newBegin; key < newEnd; key++) {
    newArray.push(array[key]);
  }
  
  return newArray;
}

module.exports = analogSlice;
