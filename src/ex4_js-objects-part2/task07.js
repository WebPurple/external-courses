var f = function(str, number) {
    if (str.length > number) {
        var x = str.slice(0, number - 3);
        x += '...';
        return x;
    }
}