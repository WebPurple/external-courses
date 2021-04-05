const getStringWithAdditionalString = (inputString, inputAdditionalString, numberWord) => {
    let numberSymbol = 0;

    if (numberWord > inputString.split(' ').length) {
        return inputString;
    }

    for (let i = 0; i < numberWord + 1; i++) {
        numberSymbol = inputString.indexOf(" ", numberSymbol) + 1;
    }

    return inputString.substring(0, numberSymbol) + inputAdditionalString + inputString.substring(numberSymbol - 1, inputString.length);
};

console.log(getStringWithAdditionalString('asdasd as dasd asd as', 'DDSDFSDF', 100));
console.log(getStringWithAdditionalString('asdasd as dasd asd as', 'DDSDFSDF', 101));
console.log(getStringWithAdditionalString('asdasd as dasd asd as', 'DDSDFSDF', 102));
module.exports = getStringWithAdditionalString;
