function maxElement(arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        };
    };
    return max;
};
module.exports = maxElement;
