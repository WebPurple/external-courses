//js_task06__Isaev_Arsenyi

var a1 = "asd dfg hjk";

function toUp(str1) {
    var newStr = str1 + ' ',
        newStr1 = '',
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
    return newStr1.slice(0, newStr1.length - 1);
}


console.log(toUp(a1));


module.export=toUp;