const getStringWithAdditionalString = (inputString) => {
    let objectResult = {};
    let ArraySymbol = inputString.split("");

    ArraySymbol.forEach((item) => {
        if (findingProperty(item, objectResult)) {
            objectResult[`${item}`] = objectResult[`${item}`] + 1;
        } else {
            objectResult[`${item}`] = 1;
        }
    });

    // eslint-disable-next-line guard-for-in
    for (let key in objectResult) {
        console.log(`${key} = ${objectResult[`${key}`]}`);
    };
};

const findingProperty = (testString, testObject) => {
    for (let key in testObject) {
        if (key === testString) {
            return true;  
        }
    }

    return false;
};

module.exports = getStringWithAdditionalString;