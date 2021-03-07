function cheakPrimeNumber(num) {
    if (typeof(num) === "number" && (num != Infinity) && (num != -Infinity) && !isNaN(num) && (num >= 0) && (num <= 1000)) {
        if(num == 0) {
            return "Введен 0";
        } else if(num == 1) {
            return "Введена 1";
        } else {
            let mark = `Число ${num} - простое число`;
            let i = 2;
            while (i < num) {
                if (num % i == 0) {
                    mark = `Число ${num} - составное число`;
                    break;
                }
                i++;
            } 
            return mark;
        }
    } else { return "Данные неверны"; }
}

module.exports = cheakPrimeNumber;