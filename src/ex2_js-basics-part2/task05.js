var f = function(arr) {
    var x = arr[0];
    var i;
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > x) x = arr[i];
    }
    console.log(`Максимальное значение: ${x}`);
}
