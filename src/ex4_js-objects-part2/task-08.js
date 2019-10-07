'use strict';

function returnsStringInCamelCase(str) {
	let arr = str.split(' ');

	function functionForDontFirstWord(strDontFirst) {
		let strDontFirstNew = strDontFirst;
		for(let i = 0; i < strDontFirstNew.length; i++) {
			if(i === 0) { 
				strDontFirstNew = strDontFirstNew.replace(strDontFirstNew.charAt(0), strDontFirstNew.charAt(0).toUpperCase());
			} else {
				strDontFirstNew = strDontFirstNew.replace(strDontFirstNew.charAt(i), strDontFirstNew.charAt(i).toLowerCase());
			}
		};
		return strDontFirstNew;
	};

	function functionForFirstWord(strFirst) {
		let strFirstNew = strFirst;
		for(let i = 0; i < strFirstNew.length; i++) {
			strFirstNew = strFirstNew.replace(strFirstNew.charAt(i), strFirstNew.charAt(i).toLowerCase());
		}
		return strFirstNew;
	};

	for(let i = 0; i < arr.length; i++) {
		if(i === 0) {
			arr[0] = functionForFirstWord(arr[0]);
		} else {
			arr[i] = functionForDontFirstWord(arr[i]);
		}
	};
		return arr.join(''); 
};

module.exports = returnsStringInCamelCase;