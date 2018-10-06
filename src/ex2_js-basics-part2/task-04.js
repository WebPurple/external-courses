function compareElement(arr) {
    var sameCount = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[0] === arr[i]) {
            sameCount++;
        }
    }
    if (sameCount === arr.length) {
        return true;
    }
    else {
        return false;
    }
}
module.exports = compareElement;