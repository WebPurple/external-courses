"use strict";
function showType(variable){
	if (typeof variable === 'string') {
		console.log('Тип переменной: String'); 	// String return func
	}
	else if (typeof variable === 'number') {console.log('Тип переменной: Number');}//Number return to end func
		else {
			console.log('Undefined');
			return undefined;
		}
	return (typeof variable);		
}
module.exports = showType;