// ## Задание 4

// Написать функцию, которая проверяет одинаковые ли элементы в массиве и выводит возвращает `true` или `false`.
function allElementsEqual(array){
    for (var i = 1; i < array.length; i++){
        if (array[i] !== array[0]){
            return false;
        }
    } return true;
}
console.log(allElementsEqual([4,4,2]));
console.log(allElementsEqual([5,5,5,5,5]));
console.log(allElementsEqual([5,5,4]));
