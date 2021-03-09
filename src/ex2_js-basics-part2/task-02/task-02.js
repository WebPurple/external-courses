/*jshint esversion: 6 */
"use strict"

function outputArr (arr) {
   
    arr.forEach((element, index, array) => {
         console.log (`${element} имеет позицию ${index} в массиве ${array}`);
    });
   console.log (` в массиве ${arr.length} элементов`);
   return;
}
let exempleArr = [1, 3, 4, 5, 2];
outputArr (exempleArr);

