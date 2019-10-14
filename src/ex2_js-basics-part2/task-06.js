function inputRandomValue(value) {
    let count = 0, result = '';
    if (value > 1000 || value < 2) {
        return 'Данные неверны';
    }
    for (let i = 1; i <= value; i++) {
        if (value % i === 0 || value === 2) {
            if (i <= value) {
                count++;
            }
        }
    }
    if (count > 2) {
        result = 'Число ' + value + ' - составное число';
    } else if (count === 2) {
        result = 'Число ' + value + ' - простое число';
    }
    return result;
}
module.exports = inputRandomValue;