function typeTest(arg) {
	if (typeof arg === 'string') {
		return'string';
	} else if (typeof arg === 'number' && !isNaN(arg)) {
		return 'number';
	}
	return undefined;
}
module.exports = typeTest;