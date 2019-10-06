let object = {
	name: 'Pavel',
	age: 22,
	profession:'programmer'
}
let includeToObject = function(field, obj){
	let result = false;
	for(key in obj){
		if (key == field) result = true; // eslint-disable-line
	}
	return result;
}
console.log(includeToObject('profession', object));
module.exports = includeToObject;