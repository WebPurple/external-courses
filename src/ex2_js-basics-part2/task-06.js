function simpleNumber(n) {
    if (n <= 1000 && n !== 1 && n !== 0) {
    for (let i = 2; i <= n; i++) {
        if (n % i === 0) {
            return `Число ${n} - составное число`;
        } 

            return `Число ${n} - простое число`;
    }
};

    return 'Данные неверны';
};
module.exports = simpleNumber;
