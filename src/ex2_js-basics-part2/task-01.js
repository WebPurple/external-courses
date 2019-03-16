/*
EPAM PracticWork #2 task-01
Remizov Maxim, 2019

Написать функцию, которая принимает либо число, либо строку и в зависимости от типа переданного аргумента возвращает 'number' или 'string'. Если аргумент не число/строка функция возвращает undefined.
*/

var myFuncDetected = function (variable){
var result;

  result = typeof (variable); 
  
  if (result === "number"){

        result = "number";

      } else if (result === "string") {

        result = "string";

      } else {

        return undefined;

      }
  
  
  return result;
        
};



module.exports = myFuncDetected;