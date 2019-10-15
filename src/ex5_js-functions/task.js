'use strict'
const Calculator =(function(){
    let currentValue = 0;
    function add(num = 0){
        currentValue+=num;
        return add;
    }
    function subtract(num = 0){
        currentValue-=num;
        return subtract;
    }
    function divide(num=1){
        if(num!==0){
         currentValue/=num;
        }
        return divide;
    }
    function multiply(num=1){
        currentValue*=num;
        return multiply;
    }
    function getResult(){
        return currentValue;
    }
    function reset(){
        currentValue = 0;
    }
    return {add, subtract,divide,multiply,getResult,reset}
}())
module.exports = Calculator;