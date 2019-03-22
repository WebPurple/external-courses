function arrayMax(arg) {
    var iMax = 0;
	for (var i = 0; i < arg.length; i++) {
		if (iMax < arg[i]) {
			iMax = arg[i];
		}
	}
	return iMax;
}
module.exports = arrayMax;