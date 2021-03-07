function getTypeData(numOrStr) {
    if (typeof(numOrStr) === "number" && !isNaN(numOrStr)) {
        return 'number';
    } else if (typeof(numOrStr) === "string") {
        return 'string';
    } else {
        return `undefined`;
    }
}

module.exports = getTypeData;