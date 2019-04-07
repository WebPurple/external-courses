/*
EPAM PracticWork #3 task-05
Remizov Maxim, 2019

Написать функцию, которая принимает объект и создает его копию (новую ссылку) и возвращает скопированный объект
*/
var funcClone = function(myObj){
  var newObj = {};
  for(var key in myObj){
		newObj[key]=myObj[key];
  }
  return newObj;
}
module.exports = funcClone;