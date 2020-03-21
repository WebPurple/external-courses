function getTotalEvenOddZero(arr){
  const result = [0,0,0]
  for(let i=0;i<arr.length;i++){
    if (typeof(arr[i])==='number'&&!Number.isNaN(arr[i])){
        if(arr[i]%2!==0){
        result[0]++
      }
      else if (arr[i]%2===0){
        result[1]++
      }
      else{
        result[2]++
      }  
    }   
  }
 return result
}

module.exports=getTotalEvenOddZero
