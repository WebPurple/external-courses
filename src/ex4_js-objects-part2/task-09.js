const getStringWithAdditionalString = (inputString, inputAdditionalString, numberWord) => {
    let numberSymbol = 0;

    for (let i = 0; i < numberWord + 1; i++) {
        numberSymbol = inputString.indexOf(" ", numberSymbol) + 1;
    }

    return inputString.substring(0, numberSymbol) + inputAdditionalString + inputString.substring(numberSymbol - 1, inputString.length);
};

module.exports = getStringWithAdditionalString;
