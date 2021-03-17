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

    let resultOfChecking = true; 

    const countDivisors = 2; 
    const maximumDivisor = Math.floor(number/2); 
    let countCurrentDivisors = 1; 
    for (i = 2; i <= maximumDivisor; i++) {
        const remainderOfTheDivision = number % i;
        
        if (remainderOfTheDivision === 0) {
            countCurrentDivisors = countCurrentDivisors + 1;
        }

        if (countCurrentDivisors > countDivisors) {
            resultOfChecking = false;
            break;
        }
    }

    console.log('This number is simple:', resultOfChecking);
    if (resultOfChecking) {
        return `Число ${number} - простое число`;
    } 
    return `Число ${number} - составное число`;
    
};

module.exports = checkPrime;
