var numOne = 10.12345;
var numTwo = 2;

function summary(x,y) {
var result = x+y;
result = (Math.round(result*1000)/1000);
console.log(result);
console.log(typeof result);
}

summary(numOne, numTwo);