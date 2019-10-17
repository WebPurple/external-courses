'use strict';
function copyObject(object) {
	const newObject = {};
	for(let key in object) {
		if(object.hasOwnProperty(key)) {
			newObject[key] = object[key];
		}
	}
	return newObject;
}
module.exports = copyObject;