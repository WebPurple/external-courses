function checkIdenticalElements(array) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i !== j) {
                if (array[i] === array[j]) {
                    counter++;
                }
            }
        }
    }
    if (counter > 0) {
        return true;
    }
    return false;
}

module.exports = checkIdenticalElements;