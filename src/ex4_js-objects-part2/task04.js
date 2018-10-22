//js_task04__Isaev_Arsenyi

var a1 = 'a sd dfg hjk';

function toUpOne(str) {
    var i = 0,
        space = "",
        newStr="";
    while (str[i] === " ") { space += ' ';++i; }
    newStr = space + str[i].toUpperCase() + str.slice(i + 1);
    return newStr;
}

console.log(toUpOne(a1));

module.export=toUpOne;