function takeObject(obj){
	for(key in obj){                 // eslint-disable-line
		console.log(key + " : " + obj[key]);
	}
}
let object = {
	name: 'Pavel',
	age: 22,
	profession:'programmer'
};
takeObject(object);
module.exports = takeObject;