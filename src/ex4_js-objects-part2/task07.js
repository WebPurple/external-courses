//js_task07__Isaev_Arsenyi

a = 'qwerty';
n=5;

function toCut(str1, num) {
    if (str1.length > num && num >= 3) {
        NewStr = str1.slice(0, num - 3) + '…';
        return NewStr;
    } return 'Error';
}


console.log(toCut(a, n));


module.export=toCut;