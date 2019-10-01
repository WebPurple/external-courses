"use strict";
function showType(variable){
	if (typeof variable === 'string') {
		console.log('Тип переменной: String'); 	//значение String вернется в конце функции
	}
	else if (typeof variable === 'number') {console.log('Тип переменной: Number');}//значение Number вернется в конце функции
		else {
			console.log('Undefined');
			return undefined;
		}
	return (typeof variable);		
}
module.exports = showType;