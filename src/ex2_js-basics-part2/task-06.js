function inputValue(value) {
    let number;
    if(Math.abs(value) < 1000 & Math.abs(value) !== 1 & Math.abs(value) !== 0) {
        number = Math.abs(value);
        let flag = false;
        for (let i = 2; i < number; i++) {
            if(number % i === 0) {
                flag = true;
            }
        }
        if(flag) {
            return 'Число ' + value + ' - составное число';
        } 
        return 'Число ' + value + ' - простое число';
    }
    return 'Данные неверны';
};
module.exports = inputValue;