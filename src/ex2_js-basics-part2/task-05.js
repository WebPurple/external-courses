function getMax(array) {
	let max = array[0];
	for(let i in array){
		if(array[i]>max){
			max=array[i];
		}
	}
	return max;
}
module.exports = getMax