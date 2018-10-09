function maxInAray(x) {
var max=0;
for (var i=0;i<x.length;++i){
if(x[i]>max) max=x[i]
}
console.log(max)
}

maxInAray([1, 2, 3, 0])

maxInAray([1, 2, 13, '_'])
maxInAray([1, 'C', 'B', '_'])