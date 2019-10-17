'use strict';
function addObject() {
    const object = {};
	object.string = "string123";
	object.number = 123;
	delete object.string;
}
module.exports = addObject;