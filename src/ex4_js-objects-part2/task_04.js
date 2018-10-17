var str1 = 'hello'

function firstLetter(str) {
    var last = str.slice(1);
    var first = str[0].toUpperCase();
    var result = first + last;
    return result

}
console.log(firstLetter(str1))