function getMax(arr) {
	let result = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > result) {
			result = arr[i];
		}
	}
	return result;
}
module.exports = getMax;