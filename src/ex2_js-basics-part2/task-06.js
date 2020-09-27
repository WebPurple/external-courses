module.exports = function numberUnder1000SimpleOrComplex (MyNumber){
	if (MyNumber > 1000) return 'Данные неверны';
	if (MyNumber === 0) return '0 не натуральное число';
	if (MyNumber === 1) return '1 не составное и не простое число';
	for(let i = 2; i < MyNumber; i++){
			if (MyNumber % i === 0){
				return 'Число ' + MyNumber + ' - составное число'
			}
		}
	return 'Число ' + MyNumber + ' - простое число';	
}