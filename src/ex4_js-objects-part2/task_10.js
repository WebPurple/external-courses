function newStr(str) {
    var arr = str1.split(' ');
    arr.reverse();
    var result = arr.join(' ');
    return result

}

var str1 = "Hello world";
console.log(newStr(str1))