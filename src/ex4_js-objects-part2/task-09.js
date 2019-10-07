'use strict';

function insertsWord(str1, str2, num) {
	let arr = str1.split(' ');
	arr[num] = arr[num] + ' ' + str2;
	return arr.join(' ');
};

module.exports = insertsWord;