var str = 'hello new world';

function n1(str) {
    var result = '';
    var arr = str.split(' ');
    for (var i = 0; i < arr.length; i++) {
        result += arr[i].charAt(0).toUpperCase() + arr[i].substring(1);

    }

    return result
}
console.log(n1(str))