var getProperty = function (obj, propName) {
return obj.__proto__[propName];
}

var obj = {a: 5, b: 6}
var obj1 = Object.create(obj);
obj.a=8;
obj.b=10;
console.log (getProperty (obj, "a"));
console.log (obj.a);
console.log (getProperty(obj ,"b"));