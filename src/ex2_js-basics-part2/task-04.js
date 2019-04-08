function arrayExports(arg) {
    for (i = 0; i < arg.length; i++) {
		if (i > 0) {
			if (arg[i] !== arg[i - 1]) {
				return false;
			}
		}
	}
	return true;
}
module.exports = arrayExports;