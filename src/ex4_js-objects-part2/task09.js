var str = 'I want to sleep';
var num = 3;
var str1 = 'very';

function newString(str, str1, num) {
    var strNew = str.split(' ');
    var strNew1;
    for (var i = 0; i <= num; i++) {
        strNew1 += strNew[i]
    }
    console.log(strNew1)

}

newString(str, str1, num)