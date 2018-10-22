//js_task09__Isaev_Arsenyi

var s1 = "0 1 2 4 5 6 7 8 9",
    s2 = "3";

function strToStr(str1, str2, num) {
    var counter = 0,
        i = 0,
        newStr="";
    while (i < str1.length) {
        if (str1[i] === ' ') {
            if (counter === num) {
                newStr = str1.slice(0, i) + ' ' + str2 + str1.slice(i, str1.length);
                return newStr;
            }
            ++counter;
        }
        ++i;
    }
    return 0;
}

console.log(strToStr(s1, s2, 2));

module.export=strToStr;