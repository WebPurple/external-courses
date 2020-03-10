function getMaxElement(array){
  let max=0;
  for(i=0;i<array.length;i++){
    if(max<array[i]){
      max=array[i]
    }
  }
  return max
}

module.exports=getMaxElement