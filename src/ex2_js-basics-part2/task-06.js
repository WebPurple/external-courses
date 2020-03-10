function isPrime(arg) {
	let result;
	if (arg < 1000) {
		if (arg === 0){
			result = 'Число 0 - составное число';
		}
		if (arg === 1 || arg === 2){
			result = 'Число ' + arg + ' - составное число';
		} else {
			result = 'Число ' + arg + ' - простое число';
			let divider = 2;
			while (divider < arg){
				if (arg % divider === 0){
					result = 'Число ' + arg + ' - составное число';
				}
				divider++;
			}
		}
		
	} else {
		result = 'Данные неверны';
	}
	return result;
}
module.exports = isPrime;