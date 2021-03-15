const findingProperty = (testString, testObject) => {
    coincidence = false;

    for (let key in testObject) {
        if (key === testString) {
            coincidence = true;
            return coincidence;
        }
    }

    return coincidence;
}

module.exports = findingProperty;