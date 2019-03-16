/*
EPAM PracticWork #2 task-02
Remizov Maxim, 2019

Написать функцию, которая будет пробегать по массиву и выводить в консоль каждый элемент массива и общее число элементов.
*/

var arr = [];

var funcArr = function (arr) {
 
 for (var i = 0; i < (arr.length); i++){
 
 	console.log(arr[i]);
 
 }
 
 var countElemArr = arr.length;
 
 console.log("Count: " + countElemArr);
 
};

module.exports = funcArr;
