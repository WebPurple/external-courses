function printEvenAndUnevenElement(array) {
    let zeroElement = 0, evenElement = 0, unevenElement = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            zeroElement++;
        }
        else if (array[i] % 2 === 0 && array[i] !== null) {
            evenElement++;
        }
        else if (array[i] % 2 === 1 || array[i] % 2 === -1) {
            unevenElement++;
        }
    }

    return [evenElement, unevenElement, zeroElement]
}

module.exports = printEvenAndUnevenElement;