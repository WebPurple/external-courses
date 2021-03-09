/*jshint esversion: 6 */
"use strict"
 
function checkArrayForSameValues(array) {

  for (let index = 0; index < array.length; index++) {
    const arrayElement = array[index];
    for (let index2 = index + 1; index2 < array.length; index2++) {
      const testElement2 = array[index2];
       if (arrayElement !== testElement2) {
         return false;
       }
    }
  }

  return true;
}

let firstTestArray = [0,0,0,0,0];

alert(checkArrayForSameValues(firstTestArray ));

let secondTestArray = [1,1,2,1,1];

alert(checkArrayForSameValues(secondTestArray));
