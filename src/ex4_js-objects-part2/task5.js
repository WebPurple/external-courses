var str = "assistance";

function findString() {
 var result;

if (~str.indexOf("ass")) {result = true}
else {result = false}
console.log(result);
return result;
}

findString(str);
