function primeNumber(Value) {
    let output;
    if (Value > 1000) {
        output = 'Данные неверны';
    } else if (Value == 0 || Value == 1) {
        output = 'Не причисляется ни к простым, ни к составным числам';
    } else {
        for (let index = 2; index <= Math.ceil(Math.sqrt(Value)); index++) {
            if (Value % index == 0) {
                output = 'Составное число';
                break;
            } else { 
                output = 'Простое число';
            }
        }
    } 
    return output;
}
module.exports = checkingIdenticalElements;