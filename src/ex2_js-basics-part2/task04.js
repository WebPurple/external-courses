var f4 = function(numbers){
	var k = true;
	for (var i = 1;i<numbers.length;i++){
		if (k) {
			if	(numbers[i-1]!==numbers[i]) k = false;
		}
	}
	console.log(k);
}

f4([0,0,0,0]);
f4([1,0,1,0]);