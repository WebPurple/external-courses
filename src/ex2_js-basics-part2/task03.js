var f = function(arr) {
    var out = [0, 0, 0];
    var i;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === 0) ++out[2];
        else if (arr[i] % 2 === 0) ++out[0];
        else if (arr[i] %2 !== 0) ++out[1];
    }
    console.log(`четных: ${out[0]}; нечетных: ${out[1]}; нуль: ${out[2]}`);
}
