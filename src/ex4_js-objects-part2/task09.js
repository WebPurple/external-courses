function newString(str, str1, num) {
    var strNew = str.split(' ');
    var strNew1 = '';
    for (var i = 0; i <= num-1; i++) {
        strNew1 += strNew[i] + ' ';
    }
    strNew1 += str1 + ' ';
    for (var j = num; j < strNew.length; j++) {
        strNew1 += strNew[j] + ' ';
    }
    return strNew1
}

function newString1(str, str1, num) {
    var strNew = str.split(' ');
    strNew.splice(num, 0, str1);
    return strNew.join(' ')
}