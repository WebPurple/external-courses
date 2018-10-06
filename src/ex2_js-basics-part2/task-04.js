function compareElement(arr) {
    var sameCount = 0;
    var i = 0;
    for (i; i < arr.length; i++) {
        if (arr[0] === arr[i]) {
            sameCount++;
        };
    };
    if (sameCount === arr.length) {
        return true;
    };
        return false;
};
module.exports = compareElement;