/*
EPAM PracticWork #2 task-03
Remizov Maxim, 2019

Написать функцию, которая посчитает и выведет в консоль количество четных и нечетных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. Возвращаемое значение -- массив вида [<кол-во четных>, <кол-во нечетных>, <кол-во нулей>].
*/


var funcResult = function(arrInput){
	var arrOutput = [],
		countZero = 0,
		evenNum = 0,
		oddNum = 0;

	
	arrInput2 = arrInput.filter(function(x){
		return x !== null;
	});

  
	for (var i=0;i<arrInput2.length;i++)	{
    	   
        if (arrInput2[i] === 0){

          countZero++;

        } else if ((arrInput2[i] % 2) === 0){

          evenNum++;

        } else {

          oddNum++;

        }       
	}
  
	arrOutput.push(evenNum);
	arrOutput.push(oddNum);
	arrOutput.push(countZero);
  
	if(countZero===0){
		console.log("четных: "+evenNum+"; нечетных: "+oddNum);
	}else{
		console.log("четных: "+evenNum+"; нечетных: "+oddNum+"; нуль: "+countZero);
	}
  
  return arrOutput;
};

module.exports = funcResult;
