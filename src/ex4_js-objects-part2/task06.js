//js_task06__Isaev_Arsenyi

var a1 = "asd dfg hjk";

function toUp(str1) {
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
    return str2.slice(0, str2.length - 1);
}


console.log(toUp(a1));


module.export=toUp;