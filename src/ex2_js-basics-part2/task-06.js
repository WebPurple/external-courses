function checkPrimeNumber(num) {
    const isNumber = typeof num === 'number';
    const isRangeOfNumbers = num >= 0 && num <= 1000;

    if  (isNumber && isRangeOfNumbers) {
        if (num === 0) {
            return 'Введен 0';
        } 

        if (num === 1) {
            return 'Введена 1';
        }

        if (num > 1) {
            let mark = `Число ${num} - простое число`;

            for (let i = 2; i < num; i++) {
               if (num%i === 0) {
                 mark = `Число ${num} - составное число`;  
               } 
            }

            return mark;
        }
    } 
    
    return 'Данные неверны'; 
}

module.exports = checkPrimeNumber;
