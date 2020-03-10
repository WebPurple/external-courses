function listElements(arr) {
	let countElements = 0;
	for (let i =0; i < arr.length; i++){
		console.log(arr[i]);
		countElements++;
	}
	console.log(countElements);
	return undefined;
}
module.exports = listElements;