function getTypeData(arg) {
    if (typeof(arg) === "number" && !isNaN(arg)) {
        return 'number';
    } else if (typeof(arg) === "string") {
        return 'string';
    } else {
        return `undefined`;
    }
}

module.exports = getTypeData;