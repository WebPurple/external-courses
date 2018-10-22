//ex3_task-03__Isaev_Arsenyi

obj1 = {
    num: 1,
    strng: "string",
    bol: true
}

str1 = "num";

function isCons(strr, obj) {
    if (strr in obj) return true;
    return false;
}

isCons(str1, obj1);

module.exports = isCons;