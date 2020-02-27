function hasIdenticalElements(array) {
	for (let i in array) {
		if(array[i]!==array[0])
			return false;
	}
	return true;
}
module.exports = hasIdenticalElements