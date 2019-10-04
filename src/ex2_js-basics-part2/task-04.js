function equalityArrayElements(arr) {
    let count = 1, elementsEqual = true;
    while ((count < arr.length) && (elementsEqual === true)) {
        if (arr[0] !== arr[count]) {
            elementsEqual = false;
        }
        count++;
    }
    return elementsEqual;
}
module.exports = equalityArrayElements;