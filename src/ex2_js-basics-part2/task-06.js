function checkSimple(argument) {
    switch (argument) {// eslint-disable-line default-case
        case 0: return (console.log("Вы ввели 0")); break;
        case 2: return (console.log("Число 2 - простое число")); break;
    }
    if (argument>1000 || argument<0) return ("Данные неверны");
    let count=2;
    let isCompound=false;
    while ((count*count<=argument)&&(isCompound === false)) {
        if (argument % count === 0) {
            isCompound = true;
        }
        else {
            count++;
        }
    }
    if (isCompound) {
        return ("Число "+argument+" - составное число");
    }
    else {// eslint-disable-line no-else-return
        return ("Число "+argument+" - простое число");
    }
}
module.exports = checkSimple;