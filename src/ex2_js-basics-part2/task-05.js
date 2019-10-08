function getMaximum(array) {
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        };
    }
    return max;
}
module.exports = getMaximum;