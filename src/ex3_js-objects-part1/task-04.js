/*
EPAM PracticWork #3 task-04
Remizov Maxim, 2019

Написать функцию, которая принимает строку и объект, проверяет есть ли у переданного объекта свойство с данным именем, если такое свойство отсутствует, до добавляет его и устанавливает значение 'new'. Функция должна возвращать исходный модифицированный объект.
*/
var funcNewProp = function(myStr, myObj){	
  var newObj = {};
  newObj = myObj;
  if (!newObj[myStr] === true){   
    newObj[myStr] = 'new';
  } 
  return newObj; 
};
module.exports = funcNewProp;