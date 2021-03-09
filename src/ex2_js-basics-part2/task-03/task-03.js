/*jshint esversion: 6 */
"use strict";
 
function checkAddOrEven(arrayOfNunbers) {
  let addNumber = 0,
      evenNumber = 0,
      zeros = 0;
      

  for (let i = 0; i<arrayOfNunbers.length;++i) {
      if (arrayOfNunbers[i] == 0) {
        ++zeros;
        continue;
      }else {
        if (arrayOfNunbers[i] % 2 == 0) {
           ++evenNumber;
           continue;
          } else {  
            ++addNumber ;
            }
       }

  }

  return [`Нечетных: ${addNumber}`, `Четных: ${evenNumber}`, `Нулей: ${zeros}`];
}

let strings2 = [2,2,2,1,1,1,0,0,0,87];

alert(checkAddOrEven(strings2));

