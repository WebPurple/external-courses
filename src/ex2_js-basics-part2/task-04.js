function compareElements(arr){
  if(arr.length<2){
    return "недостаточно элементов"

  }
  let result=false;
  for(i=1;i<arr.length;i++){
    if(arr[0]!==arr[i]){
      result=false;
      break

    }
    else{
      result=true;
      continue
    }
  }
 return result
}

module.exports=compareElements