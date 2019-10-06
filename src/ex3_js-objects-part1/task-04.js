function includeToObject(field,obj){
	let result = false;
	for(key in obj){
		if (key == field) result = true; // eslint-disable-line
	}
  if(result == false) obj[field] = 'new'; // eslint-disable-line
  return obj;
}
let object = {
	name: 'Pavel',
	age: 22,
	profession: 'programmer'
};
includeToObject('newType', object);
console.log(object);
module.exports = includeToObject;
