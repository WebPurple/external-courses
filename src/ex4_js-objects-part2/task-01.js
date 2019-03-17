// const obj = Object.create({ a: 1 });
// obj.b = 2;

function searchPropInProt(prop, obj) {
    return Object.getPrototypeOf(obj)[prop];
}
module.exports = searchPropInProt