function maxArrayElement(arr) {
    let maxElement=0, count=0;
    while (count<arr.length) {
        if (arr[count] > maxElement) maxElement = arr[count];
    count++;
    }
    return maxElement;
}
module.exports = maxArrayElement;