/*
EPAM PracticWork #2 task-05
Remizov Maxim, 2019

Написать функцию, которая возвращает максимально значение в массиве.
*/

var arr = [], 
	max;
	
var funcArrMax = function (arr) {

	max = arr[0];
	
    for (i=0;i<(arr.length);i++){

        if (max < arr[i+1]){
        
        	max = arr[i+1];
            
        }

    }
    return max;
};

module.exports = funcArrMax;