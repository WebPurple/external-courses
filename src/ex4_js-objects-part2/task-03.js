'use strict';

function removesSpaces(str) {
	let arr = str.split('');
	if(arr[0] === ' ') {
		arr.shift();
	}
	if(arr[arr.length - 1] === ' ') {
		arr.pop();
	}
	return arr.join('');
}; 
// или лучше str.trim();

module.exports = removesSpaces;