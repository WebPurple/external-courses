function myFunc(arr) {
    var maxVal = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (maxVal < arr[i]) {maxVal = arr[i];}
    }
    return maxVal;
}

console.log(myFunc([1,23,5,34,564,57,4685]))