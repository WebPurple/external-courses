'use strict'
var withoutPrototype;
function createObjWithoutPrototype() {
    withoutPrototype = Object.create(null);
    return withoutPrototype;
};
module.exports = createObjWithoutPrototype;
