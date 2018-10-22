//js_task04__Isaev_Arsenyi

var a1 = 'a sd dfg hjk';

function toUpOne(str) {
    var i = 0,
        space = '';
    while (str[i] === " ") { space += ' '; ++i; }
    NewStr = space + str[i].toUpperCase() + str.slice(i + 1);
    return NewStr;
}

console.log(toUpOne(a1));

module.export=toUpOne;