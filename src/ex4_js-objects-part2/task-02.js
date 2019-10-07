'use strict';

function createsObjectWithoutTrototype() {
	const obj = Object.create(null)
	return obj;
};

module.exports = createsObjectWithoutTrototype;