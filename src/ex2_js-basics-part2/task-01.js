function defineType(x) {
    if (typeof x == 'number') {
        return 'number';
    } else if (typeof x == 'string') {
        return 'string';
    } else {
        return undefined;
    }
};
module.exports = defineType;