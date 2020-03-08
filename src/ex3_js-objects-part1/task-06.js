module.exports = function deepCloneObject(object) {
    if (!(object instanceof Object)) {
        return object
    }
    const clonedObject = {}
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            if (object[key] instanceof Array) {
                clonedObject[key] = [];
                object[key].forEach(function cloneArrayElement(element) {
                    clonedObject[key].push(deepCloneObject(element))
                });
            }
            else if (typeof object[key] === 'object') {
                clonedObject[key] = deepCloneObject(object[key])
            } else {
                clonedObject[key] = object[key];
            }
        }
    }

    return clonedObject
}