//js_task08__Isaev_Arsenyi

var a1 = "This is camel case ";

function tolowerCamelCase(str1) {
    var newStr=str1 + ' ';
    //str1 = str1 + ' ';
    var newStr1 = '',
        arr = '',
        i = 0;
    while (i < newStr.length) {
        arr += newStr[i];
        if (newStr[i] === ' ') {
            newStr1 += arr[0].toUpperCase() + arr.slice(1);
            arr = "";
        }
        ++i;
    }
    newStr1 = newStr1[0].toLowerCase() + newStr1.slice(1);
    return newStr1.replace(/\s/g, '');
}

console.log(tolowerCamelCase(a1));


module.export=tolowerCamelCase;