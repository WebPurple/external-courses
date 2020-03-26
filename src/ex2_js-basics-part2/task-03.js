function getTotalEvenOddZero(arr){
  const result = [0,0,0]
  for(let i=0;i<arr.length;i++){
    if (typeof(arr[i])==='number'&&!Number.isNaN(arr[i])){
        if(arr[i]===0){
        result[2]++
      }
      else if (arr[i]%2===0){
        result[0]++
      }
      else {
        result[1]++
      }  
    }   
  }
 return result
}
module.exports=getTotalEvenOddZero