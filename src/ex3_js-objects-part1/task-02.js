/*
EPAM PracticWork #3 task-02
Remizov Maxim, 2019

Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения свойств. Данная функция не должна возвращать значение.
*/
var myFunc = function(myObject){
  for (var key in myObject){
	  if(key in myObject){
		console.log(key+": "+myObject[key]);
	  }
  }
}
module.exports = myFunc;