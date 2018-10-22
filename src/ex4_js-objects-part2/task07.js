//js_task07__Isaev_Arsenyi

str1 = 'qwerty';
num1=2;


function toCut(str,num){
    var newStr = str;

    if(str.length > num) newStr = str.slice(0, num) + "…";
    return newStr;
}

console.log(toCut(str1, num1));


module.export=toCut;