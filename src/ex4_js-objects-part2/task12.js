var sumAndRound = function(num1, num2){
    var result=num1+num2;
    result=Math.round(result*1000)/1000;
    return result;
}

console.log(sumAndRound(222.333, 444.333));