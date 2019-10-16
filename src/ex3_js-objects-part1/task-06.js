'use strict';
function deepCloneObject(object) {
	let newObject = {};
	if (Array.isArray(object)) {
		newObject = [];
		for (var i = 0; i < object.length; i++) {
			if (typeof object[i] === 'object') {
				newObject[i] = deepCloneObject(object[i]);
			} else {
				newObject[i] = object[i];
			}
		}
	} 
	for(let key in object) {
		if (typeof object[key] === 'object') {
			if (Array.isArray(object[key])) {
				console.log(key + ' ' + typeof key + ' ' + Array.isArray(newObject[key]));
				newObject[key] = deepCloneObject(object[key]);
			} else {
				newObject[key] = deepCloneObject(object[key]);
			}
		} else {
			newObject[key] = object[key];
		}
	}
	return newObject;
}
module.exports = deepCloneObject;