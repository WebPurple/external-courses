const findingProperty = (testString, testObject) => {

    for (let key in testObject) {
        if (key === testString) {
            return true;
        }
    }

    return false;
};

module.exports = findingProperty;
