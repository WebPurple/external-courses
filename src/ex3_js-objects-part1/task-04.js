function includeToObject(field,obj){
	let result = false;
	for (key in obj){
		if (key === field) result = true; 
	}
  	if(result === false){
  		obj[field] = 'new';  //eslint-disable-line
	}
  return obj;
}
module.exports = includeToObject;
