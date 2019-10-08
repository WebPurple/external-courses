function maxArrayElement(arr) {
    let maxElement=0;
    for (count=0; count<arr.length; count++) {
        if (arr[count] > maxElement) maxElement = arr[count];
    }
    return maxElement;
}
module.exports = maxArrayElement;