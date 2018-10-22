//js_task05__Isaev_Arsenyi

var s1 = 'asd dfg hjk',
    s2 = 'd d';

function isThere(str1, str2) {
    if (str1.includes(str2)) return true;
    return false;
}

console.log(isThere(s1, s2));

module.export=isThere;