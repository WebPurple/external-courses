'use strict';

function returnsStringInUppercase(str) {
	let arr = str.split(' ');
	for(let i = 0; i < arr.length; i++) {
		arr[i] = arr[i].replace(arr[i].charAt(0), arr[i].charAt(0).toUpperCase());
	}
	return arr.join(' ');
};

module.exports = returnsStringInUppercase;