function sameElements(arr) {
    let isSameElements = true;
    for (let i = 1; i < arr.length; i++) {
        if (arr[0] !== arr[i]) {
            isSameElements = false
        };
    }
    return isSameElements;
}
module.exports = sameElements;