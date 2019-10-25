function checkSimple(argument) {
    if (argument===0){
        return (console.log("Вы ввели 0"));
    }
    else {// eslint-disable-line no-else-return
        if (argument===2) {
            return (console.log("Число 2 - простое число"));
        }
    }
    if (argument>1000 || argument<0) return ("Данные неверны");
    let count=2, isCompound=false;
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