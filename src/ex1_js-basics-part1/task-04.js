function checkOfElements(array){
  let isEqual = true;
  for (let i =0 ; i < array.length - 1; i++){
    if (array[i] === array[i+1]){
      continue;
    } else {
      isEqual = false;
      break;
    }
  }
  return isEqual;
}
module.exports = checkOfElements;
