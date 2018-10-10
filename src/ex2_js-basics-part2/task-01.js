'use strict';
function defineType(x) {
    if (typeof x === 'number') {
        return 'number';
    } else if (typeof x === 'string') {
        return 'string';
    } return undefined;
};
module.exports = defineType;