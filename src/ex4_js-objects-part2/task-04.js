let upperCaseFirstSymbol = function(str){
	let firstSymbol = str.slice(0,1).toUpperCase();
	let string = str.slice(1,str.length);
	return firstSymbol + string;
}
module.exports = upperCaseFirstSymbol;