/*jshint esversion: 6 */
"use strict";
 
function сheckingSimpleOrComposite(number) {
  if (number == (0) || number == (1) ) {
      return ("Введите число больше 1");}
  if (number > 1000) {
      return ("Данные неверны");
  } else {
    let sqrt = Math.sqrt(number);
    let roundSqrt = Math.ceil(sqrt);
     for (let index = roundSqrt; index > 1; index--) {
        
        
        
        if ((number % index) == 0) {
            
            return ("Составное число");
            

        } else { 
                continue;
            }
        }
    
     }

     return ("Простое число");  
  
}

let test1 = 13;
alert( сheckingSimpleOrComposite(test1) );

let test2 = 14;
alert( сheckingSimpleOrComposite(test2) );

let test3 = 13;
alert( сheckingSimpleOrComposite(test3) );

let test4 = 1000;
alert( сheckingSimpleOrComposite(test4) );

let test5 = 1001;
alert( сheckingSimpleOrComposite(test5) );
