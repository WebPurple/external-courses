function checkType(value) {
	if (typeof(value) === "string" || typeof(value) === "number") {
		return typeof(value);
	}
	return undefined;
}
module.exports = checkType