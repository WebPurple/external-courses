var f6 = function(number){
	var count = 0;
	for (var i = 0; i<number; i++){
		if ((number % i) === 0) count++;
	}
	if (count <= 2) console.log("Число ", number, " - простое"); else console.log("Число ", number, " - составное");
}



f6(13);
f6(31);
f6(32);