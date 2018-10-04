function arrCounter (arr) {
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        counter += 1;
    }
    console.log(counter);
}

module.exports = arrCounter;