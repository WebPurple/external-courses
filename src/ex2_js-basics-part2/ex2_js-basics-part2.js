// Задание 1
function variableType(argument) {
	if (isNaN(argument)) {
		return undefined
	}
	if (typeof argument === 'number') {
		return 'number'
	}
	if (typeof argument === 'string') {
		return 'string'
	}
	return undefined
}

// Задание 2
function elemsOfArray(array) {
	for (let i = 0; i < array.length; i++) {
		console.log(array[i])
	}
	console.log(`Общее число элементов массива: ${array.length}`)
	return
}

// Задание 3
function oddAndEvenElems(array) {
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

oddAndEvenElems([0, 1, 2, 3, 4, 5])

// Задание 4
function equalElements(array) {
	return array.every(el => el === array[0]) ? true : false
}

// Задание 5
function maxValue(array) {
	return array.sort((a, b) => {
		return b - a
	})[0]
}

// Задание 6
function simpleNumber(number) {
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
