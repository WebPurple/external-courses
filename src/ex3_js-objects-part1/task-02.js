function takeObject(obj){
	for (key in obj) console.log(key + " : " + obj[key]);  //eslint-disable-line
}
module.exports = takeObject;