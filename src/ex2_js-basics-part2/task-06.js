'use strict';

function isPrime(a){

    var result;
    var i = 2;
    var primeFlag = true;

    if (a <= 1000){
        
        while (primeFlag && i<Math.sqrt(a)){
            if (a % i === 0){
                primeFlag = false
            }
            i++;
        }
        
        if (primeFlag){
            result = 'Число ' + a + ' - простое число';
        } else {
            result = 'Число ' + a + ' - составное число';
        }

    } else {
        result = 'Данные неверны';
    }
    
    return result;
}

module.exports = isPrime;
