var f = function(arr) {
    var out = [0, 0, 0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {++out[2]}
        else if (arr[i] % 2 === 0) {++out[0]}
        else if (arr[i] %2 !== 0) {++out[1]}
    }
    console.log(out);
}

f([1,2,3,4,0]);