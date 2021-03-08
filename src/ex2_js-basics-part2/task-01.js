/*jshint esversion: 6 */
"use strict"

function checkVelue (value) {
 
  switch (typeof value) {

   case ("string") : 
    return ("string");

    case ("number") : 
    
     if (value !== value ) { // проверка на NaN 
       return ('undefined');
     } else {
       return ('number');
     }
   

    default : 
    return ("undefined");

  }
}

let checkString = checkVelue ("вау");
console.log (checkString);

let checkNumber = checkVelue (123);
console.log (checkNumber);

let checkSameStructor = checkVelue ([]);
console.log (checkSameStructor);

let checkNaN = checkVelue (123/"str");
console.log (checkSameStructor);
