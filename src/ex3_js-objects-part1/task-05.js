//ex3_task-05__Isaev_Arsenyi

var obj1 = {
    num: 1,
    strng: "string",
    bol: true
}

function copyObj(obj) {
    let newObj = {};
    for (let key in obj) {
        if(obj.hasOwnProperty(key)) {
            newObj[key] = obj[key]
        }
    }
    return newObj;
}

console.log(copyObj(obj1));

module.exports = copyObj;