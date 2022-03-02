module.exports = function maxValue(array) {
	return array.sort((a, b) => {
		return b - a
	})[0]
}
