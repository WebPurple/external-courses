/*jshint esversion: 6 */
"use strict";

function checkValue (value) {
 
  switch (typeof value) {

   case ("string") : 
    return ("string");

    case ("number") : 
    
     if (value !== value ) { // проверка на NaN 
       return ('undefined');
     } else {
       return ('number');
     }
    break;
   
    default : 
    return ("undefined");

  }
}

let checkString = checkValue ("вау");
console.log (checkString);

let checkNumber = checkValue (123);
console.log (checkNumber);

let checkSameStructor = checkValue ([]);
console.log (checkSameStructor);

let checkNaN = checkValue (123/"str");
console.log (checkSameStructor);
