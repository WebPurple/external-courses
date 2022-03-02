module.exports = function equalElements(array) {
	return array.every(el => el === array[0]) ? true : false
}
