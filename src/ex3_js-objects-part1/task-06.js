const copyingObject = (testObject) => {
    let deepClone = JSON.parse(JSON.stringify(testObject));
    
    return deepClone;
}

module.exports = copyingObject;