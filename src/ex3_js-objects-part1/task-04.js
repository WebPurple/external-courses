//ex3_task-04__Isaev_Arsenyi

obj1 = {
    num: 1,
    strng: "string",
    bol: true
}

str1 = "numm";

function testOrAdd(str, obj) {
    let newObj;
    if (!(str in obj)) {
        newObj = obj;
        newObj[str] = "new";
    } return newObj;
}

console.log(obj1);
console.log(testOrAdd(str1, obj1));

module.exports = testOrAdd;