const getStringWithAdditionalString = (inputString) => {
    let objectResult = {};
    let arraySymbol = inputString.split("");

    arraySymbol.forEach((item) => {
        if (findingProperty(item, objectResult)) {
            objectResult[item[0]] = objectResult[item[0]] + 1;
        } else {
            objectResult[item[0]] = 1;
        }
    });

    // eslint-disable-next-line guard-for-in
    for (let key in objectResult) {
        console.log(`${key} = ${objectResult[`${key}`]}`);
    };
};

findingProperty = (testString, testObject) => {
    for (let key in testObject) {
        if (key === testString) {
            return true;  
        }
    }

    return false;
};

module.exports = getStringWithAdditionalString;