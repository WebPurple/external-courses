/*
EPAM PracticWork #2 task-01
Remizov Maxim, 2019

Написать функцию, которая принимает либо число, либо строку и в зависимости от типа переданного аргумента возвращает 'number' или 'string'. Если аргумент не число/строка функция возвращает undefined.
*/
var myFuncDetected = function (variable){
var result; 
  if (typeof variable === "number"){
        result = "number";
      } else if (typeof variable === "string") {
        result = "string";
      } else {
        result = undefined;
      }
  return result;  
};
module.exports = myFuncDetected;