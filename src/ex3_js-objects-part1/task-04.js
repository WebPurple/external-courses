function addNewProperty(property, currentObject) {
    const newObject = { ...currentObject };

    if (currentObject.hasOwnProperty(property)) {
        return newObject;
    }
    newObject[property] = 'new';

    return newObject;
}

module.exports = addNewProperty;
