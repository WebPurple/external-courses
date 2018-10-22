//js_task01__Isaev_Arsenyi

function seekProp(key, obj){
    return !Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

obj1 = Object.create({n:5, s:'qwerty', b:false});
obj1.num = 10;



console.log(seekProp('n', obj1));
console.log(seekProp('b', obj1));

console.log(seekProp('num', obj1));


module.exports = seekProp;

