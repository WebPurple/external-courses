function getPropInPrototype(property, object) {
    return object.__proto__[property];
}

module.exports = getPropInPrototype;
