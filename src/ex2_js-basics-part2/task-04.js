function getElementArray(numbers) {
	let result = true;
	let i = 0;
	while (result && i < numbers.length - 1) {
		if (numbers[i] !== numbers[i + 1]){
			result = false;
		}
		i++;
	}
	return result;
}
module.exports = getElementArray;