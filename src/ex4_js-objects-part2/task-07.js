function cutString(str, limit) {
    if (str.length > limit) {
        var dots = '…';
		var lmt = limit;
        lmt -= dots.length;
        return str.substr(0, lmt) + dots;
    }
	return str;
}
module.exports = cutString;