function getValue(data) {
    if (typeof data === 'number' && !isNaN(data)) {
        return 'number';
    } else if (typeof data === 'string') {
        return 'string';
    }
    return undefined;
}
module.exports = getValue;