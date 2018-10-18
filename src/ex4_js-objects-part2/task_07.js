var str1 = 'Hello world';

function strLength(str, numb) {
    if (numb < str.length) {
        var subString = str.slice(0, numb - 3)
        var result = subString + '...'
        return result;

    }

}
console.log(strLength(str1, 5))