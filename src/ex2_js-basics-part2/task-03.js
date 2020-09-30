module.exports = function countArray (myArr) {
    let numberZero = 0;
    let numberEven = 0;
    let numberOdd = 0;
    
    for (let j = 0 ; j < myArr.length; j++) {
        if (typeof myArr[j] === "number" && !isNaN(myArr[j])) {
    	    if (myArr[j] === 0) {
			    numberZero++;
		    }
		    else{
                if (myArr[j] %2 === 0) {
                    numberEven++;
                }
			    else {
                    numberOdd++; 
                }
		    }
        }     
	}
   
    console.log ([numberEven,numberOdd,numberZero]);
    console.log ('// четных: ' + numberEven + '; нечетных: ' + numberOdd + '; нуль: ' + numberZero);
   
    return [numberEven,numberOdd,numberZero];
}
