//js_task10__Isaev_Arsenyi

var number1=3.1415;
var number2=2.71;

function sum(num1, num2){
    return +((num1+num2).toFixed(3));
}

console.log(sum(number1,number2));


module.exports = sum;

