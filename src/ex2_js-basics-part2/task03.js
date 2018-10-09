var f3 = function(numbers){
	var even = 0;
	var odd = 0;
	var zeros = 0;
	for (var i = 0; i<numbers.length; i++){
		if (numbers[i]===0) {
            zeros++;
        }else if ((numbers[i] % 2)===0) {
            even++;
        } else{
            odd++;
        }
    }
	console.log("четных: ",even,"; нечетных:", odd, "; нулей:", zeros,";");
}

f3([0,2,4,5]);