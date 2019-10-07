'use strict';

function countsCharacterRepetition(str) {
	let arr = str.split('');
	for( let i = 0; i < arr.length; i++) {
		let counter = 0;
		for( let j = 0; j < arr.length; j++ ) {
			if(arr[i] === arr[j] && counter++ > 0) {
				arr.splice(j, 1);
				counter = 0;
				j = -1;
				console.log();
			}
		}
	}
	console.log(arr.length);
	return arr.length;
};

module.exports = countsCharacterRepetition;