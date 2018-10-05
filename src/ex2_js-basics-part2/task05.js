var f5 = function(numbers) {
	var max = numbers[0];
	for (var i = 0; i<numbers.length; i++){
		if (max<numbers[i]) max = numbers[i];
	}
	console.log(max);
}

f5([12,-3,56,14]);