function copyObject(obj){
  let newObj = {};
	for (key in obj){   //eslint-disable-line
		newObj[key] = obj[key]  
	}
	return newObj;
};
module.exports = copyObject;