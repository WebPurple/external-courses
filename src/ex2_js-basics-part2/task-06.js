function simpleNumber(n) {
    if (n > 1000 || n == 1 || n == 0) {
        return ('данные неверны');
    };
    for (let i = 2; i <= n; i++) {
        if (n % i === 0) {
            return console.log(`Число ${n} - составное число`);
        } else {
            return console.log(`Число ${n} - простое число`);
        }
    }
};
module.exports = simpleNumber;
