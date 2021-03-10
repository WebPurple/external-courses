const checkPrime = (number) => {
    if (number === 1) { 
        //the number 1 is neither prime nor composite, since this violates the uniqueness of the prime factorization, which is important for number theory
        console.log('The number 1 is neither prime nor composite');
        return false;
    }

    if (number === 0) {
        //the number 0 is neither prime nor composite, since it is not a natural number
        console.log('The number 0 is neither prime nor composite');
        return false;
    }

    if (number > 1000) {
        console.log('Error: the entered number is greater than 1000');
        return 'Данные неверны';
    }

    let resultOfChecking = true; //сделаем предположение, что наше число является простым

    const countDivisors = 2; //простое число делиться на 1 и само себя
    const maximumDivisor = Math.floor(number/2); //если мы делим на число, которое больше половины текущего, то оно всегда будет дробным (за исключением, если делим сами на себя)
    let countCurrentDivisors = 1; //если число не равно 1 или 0, то оно всегда будет делиться на 1
    for (i = 2; i <= maximumDivisor; i++) {
        RemainderOfTheDivision = number % i;
        
        if (RemainderOfTheDivision === 0) {
            countCurrentDivisors = countCurrentDivisors + 1;
        }

        if (countCurrentDivisors > countDivisors) {
            resultOfChecking = false;
            break;
        }
    }

    console.log('This number is simple:', resultOfChecking);
    if (resultOfChecking) {
        return 'Число ' + number + ' - простое число';
    } 
    return 'Число ' + number + ' - составное число';;
    
}

module.exports = checkPrime;