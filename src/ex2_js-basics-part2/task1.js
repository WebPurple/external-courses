function determineType (arg) {
    if (typeof arg === 'number') {
        return 'number';
    } else {
        if (typeof arg === 'string') {
            return 'string';
        } else {
            return 'undefined';
        }
    }
};

module.exports = determineType;