module.exports = function simpleNumber(number) {
	if (number > 1000) {
		return console.log('Данные неверны')
	}
	if (number === 0 || number === 1) {
		return console.log('Не причисляется ни к простым, ни к составным числам')
	}

	let finalArray = []
	for (let i = 1; i <= number; i++) {
		if (number % i === 0) {
			finalArray.push(i)
		}
	}
	finalArray.length === 2
		? console.log('Простое число')
		: console.log('Составное число')
}
