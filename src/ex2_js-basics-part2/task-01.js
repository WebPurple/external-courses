module.exports = function variableType(argument) {
	if (isNaN(argument)) {
		return undefined
	}
	if (typeof argument === 'number') {
		return 'number'
	}
	if (typeof argument === 'string') {
		return 'string'
	}

	return undefined
}
