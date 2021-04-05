const getPropertyInPrototype = (findProperty, inputObj) => {
    for (let key in inputObj.__proto__) {
        if (findProperty === key) {
            return inputObj[key];
        }
    }

    // eslint-disable-next-line consistent-return
    return;
};

module.exports = getPropertyInPrototype;
