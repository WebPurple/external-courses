// ## Задание 2

// Написать функцию, которая будет пробегать по массиву и выводить в консоль каждый элемент массива и общее число элементов.
var array = [2,4,6,8];
function showElements(array){
    for(var i = 0; i < array.length; i++){
        console.log(array[i]);
    } console.log(array.length);
}
showElements(array);
showElements([1,10,100,1000,10000]);
showElements(["a","b","c"]);