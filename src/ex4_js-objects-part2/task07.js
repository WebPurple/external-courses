function extraction(str, num) {
    if (str.length<=num) {
        return str
    } else {
        var strNew = '';
        for (var i = 0; i < num - 3; i++) {
            strNew += str[i];
        }
        strNew += '...';
        return strNew
    }
}  