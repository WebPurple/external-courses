function isEqual(array) {
    let result = true;
    if (array.length === 0) {
        result = true;
    }
    for (let i = 0; i < array.length - 1; i++) {
        a = array[i];
        if (a === array[i + 1]) {
            result = true;
        }
        else {
            result = false;
        }
    }
    return result
}

module.exports = isEqual;