// ## Задание 5

// Написать функцию, которая возвращает максимально значение в массиве.
function maxNumber(array){
    var max = array[0];
    for (var i = 1; i < array.length; i++){
        if (array[i] >= max){
            max = array[i];
        }
    }
    return max;
}
console.log(maxNumber([5,7,3,1]));
console.log(maxNumber([0,-1,0]));
console.log(maxNumber([45,45,100,45]));
console.log(maxNumber([-1,-4,-2]));
