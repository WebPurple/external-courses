var obj = {
    1: 123,
    'lll': 'qwe'
}
var obj1 = Object.create(obj);
function f(string, obj1) {
    return obj.hasOwnProperty(string);
}
