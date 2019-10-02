function isEqual(array) {
    var result = true;
    if (array.length === 0) {
        result = true;
    }
    for (var i = 0; i < array.length; i++) {
        a = array[i];
        if (a === array[i + 1]) {
            result = true
        }
        else {
            result = false
        }
    }
    return result
}

module.exports = isEqual;