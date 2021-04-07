function createClonedObject(clonedObject) {
    const cloneObj = Object.assign({}, clonedObject);
    return cloneObj;
}

module.exports = createClonedObject;
