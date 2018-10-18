var str = 'hello new world';

function n1(str) {
    var masstr = str.split(' ');
    var result = '';
    result = masstr[0].charAt(0).toLowerCase() + masstr[0].substring(1);
    for (var i = 1; i < masstr.length; i++) {
        result += masstr[i].charAt(0).toUpperCase() + masstr[i].substring(1);

    }

    return result
}
console.log(n1(str))