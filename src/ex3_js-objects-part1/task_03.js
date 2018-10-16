var x = {
    Name: 'lena',
    a: 6,
    b: 8,
};
var y = 'Name'

function trueOrFalse(key, obj) {
    return key in obj;


}
console.log(trueOrFalse(y, x));