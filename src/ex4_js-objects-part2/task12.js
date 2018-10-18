var sumTwoNumbers=function(num1,num2){
    var n=0;
 
  if (typeof num1==='number' && typeof num2==='number' && !isNaN(num1)&&!isNaN(num2)){
       n=num1+num2
    return parseFloat(n.toFixed(3))
 }
else console.log('Переданы не числа')
}

console.log(sumTwoNumbers(3.023333333,4.131000023))
console.log(typeof sumTwoNumbers(3.02,4.131))
