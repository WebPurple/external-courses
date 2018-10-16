var x = {
    Name: 'lena',
    a: 6,
    b: 8,
};
var y = 'Name'

function newObject(key, obj) {
    if (key in obj) {
        return obj;
    } else {
        obj[key] = "new";
        return obj;
    }



}
console.log(newObject(y, x))