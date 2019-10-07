'use strict';

function lookStringInObject(key, obj) {
	const newObj = Object.create(obj);
	let value;
	for( let name in obj.__proto__) {
		if(key === name) {
			value = newObj.__proto__[name];
		}
	}
	return value;
};

module.exports = lookStringInObject;