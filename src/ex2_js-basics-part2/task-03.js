module.exports = function oddAndEvenElems(array) {
	let even = []
	let odd = []
	let zero = []
	for (let i = 0; i < array.length; i++) {
		if (typeof array[i] !== 'number') {
			continue
		}
		if (array[i] % 2 === 0 && array[i] !== 0) {
			even.push(array[i])
		}
		if (array[i] % 2 !== 0) {
			odd.push(array[i])
		}
		if (array[i] === 0) {
			zero.push(array[i])
		}
	}

	return console.log([even.length, odd.length, zero.length])
}
