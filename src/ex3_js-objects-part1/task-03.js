let includeToObject = function(field, obj){
	for (key in obj){
		if (key === field) return true;
	} 
	return false;
}
module.exports = includeToObject;