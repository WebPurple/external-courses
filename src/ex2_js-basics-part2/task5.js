function maxElement (arr) {
    maxEl = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (maxEl < arr[i]) {
            maxEl = arr[i];
        }
    }
    return maxEl;
}

console.log (maxElement ([10, 2, 5, 3]));