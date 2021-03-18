const modifiedObject = (testString, testObject) => {
    let modifiedObject = testObject;

    for (let key in testObject) {
        if (key === testString) {
            return modifiedObject;
        }
    }

    modifiedObject[testString] = 'new';

    return modifiedObject;
};

module.exports = modifiedObject;
