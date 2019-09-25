function calcElements(arr){
  let chet = 0;
  let nechet = 0;
  let zero = 0;
  for (let i=0 ; i < arr.length; i++){
    if (typeof arr[i]=== "number"){
      if (arr[i]=== 0 ){
        zero += 1;
      } else if (arr[i] % 2 === 0 ){
        chet += 1;
      } else if (arr[i] % 2 === 1 ){
        nechet += 1;
      } else continue
    }
  } 
  let result = [chet,nechet,zero];
  console.log(`Сhet: ${result[0]} Nechet : ${result[1]} Zero: ${result[2]}`);
  return result;
}
module.exports = calcElements;

