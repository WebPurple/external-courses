// ## Задание 3

// Написать функцию, которая посчитает и выведет в консоль количество четных и нечетных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. Возвращаемое значение -- массив вида `[<кол-во четных>, <кол-во нечетных>, <кол-во нулей>]`.

// ```js
// f([1, 2, 3, 4]);
// // четных: 2; нечетных: 2
// // [2, 2, 0]

// f([1, 2, 3, 0]);
// // четных: 1; нечетных: 2; нуль: 1
// // [1, 1, 1]
// ```
var array = [];
function oddAndEven (array){
    var oddEvenZero = [0, 0, 0];
    var i;
    var rest;
    
    for(i = 0; i < array.length; i++){
        if (array[i] === 0) {
            oddEvenZero[2]++;
       } else if (array[i]!== 0){
           rest = array[i] % 2;
           if (rest === 1){
            oddEvenZero[1]++;
           } else if (rest === 0){
                oddEvenZero[0]++;
           }
       } 
    }
    
    console.log("чётных: " + oddEvenZero[0] + ", нечётных: " + oddEvenZero[1] + ", нулей: " + oddEvenZero[2]);
    return oddEvenZero;
}
console.log(oddAndEven([1,2,3,0]));
console.log(oddAndEven([2, 4, 13, 15, 0, 0, 55]));
