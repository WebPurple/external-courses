function capitalLetters(str) {
    var arr = str.split(' ');
    var result = '';
    for (var i = 0; i < arr.length; i++) {
        result += arr[i][0].toUpperCase() + arr[i].substring(1);
        if (i !== arr.length - 1) {
            result += ' ';
        }
    }
    return result
}