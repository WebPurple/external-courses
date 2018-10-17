var obj = { a: 1, b: 2, c: 3 };
var obj1 = Object.create(obj);
obj1.d = 4;

function f(obj1, key) {
    if (key in obj1.__proto__) {
        return true
    } else {
        return false
    }
}

console.log(f(obj1, 'd'))