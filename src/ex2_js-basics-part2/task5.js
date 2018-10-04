function maxElement (arr) {
    maxEl = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (maxEl < arr[i]) {
            maxEl = arr[i];
        }
    }
    return maxEl;
}

module.exports = maxElement;