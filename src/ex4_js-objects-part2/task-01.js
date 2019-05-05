function searchPropInProt(prop, obj) {
    return Object.getPrototypeOf(obj)[prop];
}
module.exports = searchPropInProt