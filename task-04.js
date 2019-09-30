function equalityArrayElements(Arr) {
    let count = 1, elementsEqual = true;
    while ((count < Arr.length) && (elementsEqual === true)) {
        if (Arr[0] !== Arr[count]) {
            elementsEqual = false;
        }
        count++;
    }
    return(elementsEqual);
}
module.exports = equalityArrayElements; 