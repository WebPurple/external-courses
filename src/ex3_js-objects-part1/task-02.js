module.exports = function printObject(object) {
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            console.log(key + ": " + object[key])
        }
    }

    return undefined
}