function researchStringInObject (someString, someObject ) {
    for (let key in someObject) {
        if (key === someString ) {
            return true;
        }
    }
    return false;
}

module.exports = researchStringInObject;