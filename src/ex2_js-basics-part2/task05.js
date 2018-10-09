function maxInAray(x) {
var max=0;
for (var i=0;i<x.length;++i){
if(x[i]>max) max=x[i]
}
return max
}

console.log(maxInAray([1, 2, 3, 0]))

console.log(maxInAray([1, 2, 13, '_']))
console.log(maxInAray([1, 'C', 'B', '_']))