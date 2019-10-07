'use strict';

function returnsStringInUppercase(str) {
	return str.replace(str.charAt(0), str.charAt(0).toUpperCase());
};

module.exports = returnsStringInUppercase;