function maxElement(arr) {
    var max = arr[0];
    var i =0;
    for (i; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        };
    };
    return max;
};
module.exports = maxElement;
