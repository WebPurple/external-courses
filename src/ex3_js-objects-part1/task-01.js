let obj = {};

obj.a = 1;
obj.b = [];
obj.c = () => {};

delete obj.a;

console.log(obj);
