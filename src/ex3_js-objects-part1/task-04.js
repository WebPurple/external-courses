
const getnewObj = function (str, obj) {
    const newObj = obj;

    if (!obj.hasOwnProperty(str)) {
        newObj[str] = 'new';
	}

	return newObj;
};
module.exports = getnewObj;
