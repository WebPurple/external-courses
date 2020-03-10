function getType(variable) {
	let result;
	switch (typeof(variable)){
		case 'number':
			if (isNaN(variable)) {
				result = undefined;
			}else{
				result = 'number';
			}
			break;
		case 'string':
			result = 'string';
			break;
		default:
			result = undefined;
		}
	return result;	
}
module.exports = getType;