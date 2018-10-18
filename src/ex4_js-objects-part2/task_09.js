function substr(str1, str2, num) {
    var arr = str1.split(' ');
    arr.splice(num, 0, str2);
    var result = arr.join(' ');
    return result

}

var str1 = "Hello world";
var str2 = "new";
console.log(substr(str1, str2, 1))