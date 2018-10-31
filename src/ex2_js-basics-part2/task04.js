var f = function(arr) {
    var x = arr[0];
    var z = 0;
    var i;
    for (i = 1; i < arr.length; i++) {
        if (x !== arr[i]) {++z; break}
    }
    if (z === 0) console.log("true");
    else console.log("false");

}
