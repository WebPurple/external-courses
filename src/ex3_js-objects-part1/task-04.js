function createProperties(string, checkedObject) {
    if(!(string in checkedObject)) {
        checkedObject[string] = "new";
    }

    return checkedObject;
}

module.exports = createProperties;
