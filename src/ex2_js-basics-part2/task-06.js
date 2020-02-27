function getTypeNumber(number) {
	if(number>1000 || number<0 || Number.isNaN(number)|| typeof(number) !=="number"){
		return 'Данные неверны'
	}
	if(number===1||number===0){
		return `Число ${number} - число(0 или 1)`
	}
	let state = false;
	for(let i = 2; i<number; i++){
		if(number%i===0){
			return `Число ${number} - составное число`
		}
	}
	return `Число ${number} - простое число`
}
module.exports = getTypeNumber