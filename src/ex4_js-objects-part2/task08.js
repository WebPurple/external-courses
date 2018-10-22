//js_task08__Isaev_Arsenyi

var a1 = "This is camel case ";

function tolowerCamelCase(str1) {
    NewStr = str1 + ' ';
    var str2 = '',
        arr = '',
        i = 0;
    while (i < NewStr.length) {
        arr += NewStr[i];
        if ( NewStr[i] === ' ') {
            str2 += arr[0].toUpperCase() + arr.slice(1);
            arr = "";
        }
        ++i;
    }
    str2 = str2[0].toLowerCase() + str2.slice(1);
    return str2.replace(/\s/g, '');
}

console.log(tlowerCamelCase(a1));


module.export=tolowerCamelCase;