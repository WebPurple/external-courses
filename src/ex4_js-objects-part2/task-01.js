'use strict';
function searchValueOfObjectProperty(key, object) {
    let newObject = Object.create(object);
    let valueProperty;
    for( let nameProperty in object.__proto__) {
        if(key === nameProperty) {
            valueProperty = newObject.__proto__[nameProperty];
        }
    }
    return valueProperty;
}
module.exports = searchValueOfObjectProperty;