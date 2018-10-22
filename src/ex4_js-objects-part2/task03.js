//js_task03__Isaev_Arsenyi

var a1 = " asd dfg hjk ",
    a2 = " asd dfg hjk",
    a3 = "asd dfg hjk ";

function delSpace(str) {
    if (str[0] === ' ' && str[str.length - 1] === ' ') return str.slice(1, str.length - 1);
    else
    if (str[0] === ' ') return str.slice(1);
    else
    if (str[str.length - 1] === ' ') return str.slice(0, str.length - 1);
    return 0;
}

console.log(delSpace(a1));
console.log(delSpace(a2));
console.log(delSpace(a3));

module.export=delSpace;