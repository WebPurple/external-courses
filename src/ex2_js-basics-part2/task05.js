function maxInAray(x) {
    if (x instanceof Array) {
var max=0;
for (var i=0;i<x.length;++i){
if(x[i]>max) max=x[i]
}
return max
}
else console.log('Это не массив') ;
return x;
}

console.log(maxInAray([1, 2, 3, 0]))

console.log(maxInAray([1, 2, 13, '_']))
console.log(maxInAray(['1', 'c', 'B', '_']))

console.log(maxInAray(1))