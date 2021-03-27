const getPropertyInPrototype = (findProperty, inputObj) => {
    for (let key in inputObj.__proto__) {
        if (findProperty === key) {
            return inputObj[key];
        }
    }

    return undefined;
};

module.exports = getPropertyInPrototype;
