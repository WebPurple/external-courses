let object = {
	name: 'Pavel',
	age: 22,
	profession: 'programmer'
};
function copyObject(obj){
  let newObj = {};
	for (key in obj) newObj[key] = obj[key]  // eslint-disable-line
	return newObj;
};
console.log(copyObject(object));
module.exports = copyObject;