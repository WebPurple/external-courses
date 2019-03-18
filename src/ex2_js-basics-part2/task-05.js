function getMaxNumber(array){
  var max = array[0];
  for(var i=1; i<array.length; i++){
    if(array[i] > max){
      max = array[i];
    }
  }
  return max;
}

module.exports = getMaxNumber;