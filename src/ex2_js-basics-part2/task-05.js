module.exports = function MaxValueOfArray (myArr) {
    let result = myArr[0];
    
    for (let j = 1 ; j < myArr.length; j++) {
	    if (myArr[j] > result) {
            result = myArr[j];
        }
    }
    
    return result;
}
