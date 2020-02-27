function outputArray(array) {
	for (let i in array) {
		console.log(array[i]);
	}
	console.log('Количество элементов = ' + array.length);
}
module.exports = outputArray