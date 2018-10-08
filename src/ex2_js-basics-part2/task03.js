var f = function (num) {
    var even = 0;
    var odd = 0;
    var zeros = 0;
    for ( var i = 0; i < num.length; i++)
    if (num [i] <= 0) zeros ++;
    else if (num [i] % 2) even++;
    else odd++;
    console.log ("четных: ", even,"; нечетных: ", odd, "; нулей: ", zeros,";");
}
f ([0,2,3,5,6])