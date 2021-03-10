function cheakPrimeNumber(num) {

    const checkForNumber = typeof(num) === 'number';
    const checkForInfinity = num !== Infinity && num !== -Infinity;
    const checkForNaN = !isNaN(num); 
    const checkForRangeOfNumbers = num >= 0 && num <= 1000;

    if  (checkForNumber && checkForInfinity && checkForNaN && checkForRangeOfNumbers) {
        if(num === 0) {
            return 'Введен 0';
        } 

        if(num === 1) {
            return 'Введена 1';
        }

        else {
            let mark = `Число ${num} - простое число`;

            for(let i = 2; i < num; i++) {
               mark = `Число ${num} - составное число`;
            }

            return mark;
        }
    } 
    
    else { 
        return 'Данные неверны'; 
    }
}

module.exports = cheakPrimeNumber;
