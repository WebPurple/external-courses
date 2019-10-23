'use strict';
function createEmptyObjectWithoutPrototype() {
    return Object.create(null);
}
module.exports = createEmptyObjectWithoutPrototype;