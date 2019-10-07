'use strict';

function reverseString(str) {
	let arr = str.split('');
	return arr.reverse().join('');
};

module.exports = reverseString;