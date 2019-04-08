function noProto(obj) {
	return Object.create(null, {});
}
module.exports = noProto;