'use strict';

function looksStringInString(stringFirst, stringSecond) {
	return (stringFirst.indexOf(stringSecond) > -1 ? true : false) ;
};

module.exports = looksStringInString;