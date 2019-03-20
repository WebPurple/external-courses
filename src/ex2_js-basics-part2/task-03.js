function arrayInfo(arg) {
    var iEven = 0;
	var iOdd = 0;
	var iZeros = 0;
    for (var i = 0; i < arg.length; i++){
		if (arg[i] === 0) {
			iZeros++;
		} else if (arg[i] !== null) {
			if (arg[i] % 2 === 0) {
				iEven++;
			} else {
				iOdd++;
			}
		}
	}
    return [iEven, iOdd, iZeros];
}
module.exports = arrayInfo;