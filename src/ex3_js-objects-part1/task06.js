var f6 = function (obj) {
    var copyObj = {};
    for (var key in obj) {
        if (typeof (obj[key]) === "objects") {
            copyObj [key] = f6 (obj[key]);
        } else {
            copyObj [key] = obj [key];
        }
    }
    return copyObj;
}
var obj1 = {
    a: { a1: 1, a2: { a10: 3, a11: 4}}, b: 5
}
var obj2 = f6 (obj1);
console.log (obj2);