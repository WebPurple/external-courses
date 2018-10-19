function lowerCamelCaseNotation(str) {
    var str1 = str.split('');
    str1[0] = str1[0].toLowerCase();
    var space = 0;
    for (var i = 1; i < str.length; i++) {
        if (str1[i] === ' ') {
            space++;
            str1.splice(i,1);
            str1[i] = str[i+space].toUpperCase();
        }
    }
    var strNew = str1.join('');
    console.log(strNew);
}