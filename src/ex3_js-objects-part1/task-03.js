/*
EPAM PracticWork #3 task-03
Remizov Maxim, 2019

Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.
*/
var findKey = function(myStr, myObj){
  for (var key in myObj){   
    if(key === myStr){
      return true;
    }
  }
  return false;
};
module.exports = findKey();