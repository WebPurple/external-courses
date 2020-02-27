function getEvenAndOddNumder(array) {
	let countArray = [0, 0, 0];
	for (let i in array) {
		if (typeof(array[i]) === "number") {
			if (array[i] === 0) {
				countArray[2]++;
			} else if (array[i] % 2 > 0) {
				countArray[1]++;
			} else if (array[i] % 2 === 0) {
				countArray[0]++;
			}
		}
	}
	return countArray;
}
module.exports = getEvenAndOddNumder