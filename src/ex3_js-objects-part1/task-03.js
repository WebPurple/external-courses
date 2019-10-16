'use strict';
function checkObjectPropertyName(string, object) {
	for(let key in object) {
		if(obj.hasOwnProperty(key) && key === string) {
			return true;
		}
	}
	return false;
};
module.exports = checkObjectPropertyName; 