function getDeepCopyObject(object) {
    var newObj = (object instanceof Array) ? [] : {};
    for (var key in object) {
        if (typeof object[key] === 'object') {
            newObj[key] = getDeepCopyObject(object[key]);
        } else {newObj[key] = object[key]}
    }
    return newObj;
}
module.exports = getDeepCopyObject;