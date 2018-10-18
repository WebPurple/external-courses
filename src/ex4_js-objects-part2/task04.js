function capitalLetter(str) {
    var strNew = str[0].toUpperCase();
    for (var i = 1; i < str.length; i++) {
        strNew += str[i];
    }
    return strNew
}