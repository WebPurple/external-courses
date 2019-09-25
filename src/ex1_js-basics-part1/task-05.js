function getMaxValue(arr){
  let maxElement = arr [0];
  for ( let num = 0; num < arr.length - 1; num++ ){
    if (arr[num+1] > arr[num]){
      maxElement = arr[num +1];
      continue;
    }
  }
return maxElement;
}
module.exports = getMaxValue;
