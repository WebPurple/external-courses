function isPrimeNumber(a) {
    let answer = 0;
    if (a > 1000 || a < 0) {
        answer = 'Данные неверны';
    }
    else if (a % 2 === 0 || a % 3 === 0 || a % 5 === 0 || a === 1 || a === 0) {
        answer = `Число ${a} - составное число`;
    }
    else {
        answer = `Число ${a} - простое число`;
    }
    return answer
}

module.exports = isPrimeNumber;