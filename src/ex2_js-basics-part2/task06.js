// ## Задание 6 💪

// Написать функцию, которая принимает на входе любое число, но не больше 1000 и определяет является ли оно простым и выводит простое число или нет. Если введено больше 1000, то выводится, что данные неверны.

// Пример работы функции:

// ```js
// f(13);
// // Число 13 - простое число

// f(14);
// // Число 14 - составное число
// ```
function isPrime(number){
    var i;
    if (number > 1000){
        return "Данные неверны";
    }
    else if (number <= 1){
        return "Число - не простое и не составное"
    }

    for (i = 2; i < number; i++){
        if ((number % i) === 0){
            return "Число " + number + " - составное число";
        } 
    }
    return "Число " + number + " - простое"; 
}
console.log(isPrime(13));
console.log(isPrime(9));
console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(-7));
console.log(isPrime(2980));
