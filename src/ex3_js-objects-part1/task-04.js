function addKey(key, arg) {
	if (!(key in arg)){
	Object.assign(arg,{[key]:'new'})
	}
	return arg;
}
module.exports = addKey;