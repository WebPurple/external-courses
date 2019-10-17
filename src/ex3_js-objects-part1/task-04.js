'use strict';
function acceptStringObject(string, object) {
	let addObject = object;
	if (typeof string === 'string' && typeof addObject === 'object') {
		if (!(string in addObject)) {
			addObject[string] = 'new';
		}
	}
	return addObject;
} 
module.exports = acceptStringObject;