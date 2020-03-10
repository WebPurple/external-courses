function countElements(arr) {
	let result = [0,0,0];
	for (let i = 0; i < arr.length; i++){
		if (typeof(arr[i]) === 'number'){
			if (arr[i] === 0){
				result[2]++;
			} else {
				if (arr[i]%2 === 0){
					result[0]++;
				} 
				if (arr[i]%2 !== 0){
					result[1]++;
					console.log(arr[i] + ' -> ' + result[1]);
				}
			}
		}
	}
	return result;
}
module.exports = countElements;