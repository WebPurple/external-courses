/*
EPAM PracticWork #2 task-04
Remizov Maxim, 2019

Написать функцию, которая проверяет одинаковые ли элементы в массиве и выводит возвращает true или false.
*/
var funcDetectArr = function (arr) {
  for (i=0;i<arr.length-1;i++){  
	if (arr[i+1] !== arr[i]) {
  return false;
  }
}
return true;
};
module.exports = funcDetectArr;

