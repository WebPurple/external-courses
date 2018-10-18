var obj = {
    a:1,
    b:2,
    c:3
};
var objNew = Object.create(obj);
objNew.d=4;

function findProperty(objNew, prop) {
        if (objNew.__proto__[prop] !== undefined) {
        return true
        } else {
            return false
        }
}

var test1=findProperty(objNew, 'b');
console.log(test1);
var test2=findProperty(objNew, 'd');
console.log(test2);