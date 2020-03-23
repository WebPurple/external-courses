 function cloneObj(arg) {
	let clone = {};
	for (let key in arg) {
  		if (arg.hasOwnProperty(key)){
  		clone[key] = arg[key];}
	}
	return clone;
}
module.exports = cloneObj;