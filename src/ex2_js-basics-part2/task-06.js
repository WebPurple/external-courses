module.exports = chekPrime;

function chekPrime(variable) {
    if (variable <= 1000) {
        for (let j = 2; j < variable; j++) {
            if (variable % j === 0) {
                return "Число " + String(variable) + " - составное число";
            }
        }
        return "Число " + String(variable) + " - простое число";
    }
    return "Данные неверны";
}