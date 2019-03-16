/*
EPAM PracticWork #2 task-06
Remizov Maxim, 2019

Написать функцию, которая принимает на входе любое число, но не больше 1000 и определяет является ли оно простым и выводит простое число или нет. Если введено больше 1000, то выводится, что данные неверны.

Пример работы функции:

f(13);
// Число 13 - простое число

f(14);
// Число 14 - составное число
*/

var funcEven = function (num){
  
  var counter = 0;
  
  if ((num > 1000) || (num < 2)) {
    
    result = "Данные неверны";
  
  } else {
  
    var x = Math.sqrt(num);
    
    for (i = 2; i < x; i++){
    
      if ((num % i) === 0){
        
        counter++;
        
      }
    }
    
    if (counter === 0){
    
      result = 'Число '+num+' - простое число';
      
    } else {
    
    result = 'Число '+num+' - составное число';
    
    }
  }
  
  return result;
  
}


module.exports = funcEven;
