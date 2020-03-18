function getKeys(arg) {
	for (let key in arg) {
		if (arg.hasOwnProperty(key)) {
			console.log(key + ':' + arg[key]);
		}  		
	}
}
module.exports = getKeys;