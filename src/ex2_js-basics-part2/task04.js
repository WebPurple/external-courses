function equalsAray(x) {

    if (x instanceof Array) {
for (var i=0;i+1<x.length;++i) {
    
if (x[i]!==x[i+1]){
    return 'false'}
}
return 'true'

}
else console.log('Это не массив') ;
return 'false'
}

var x = [1,2,3,5,7]
var y = [7,7,7,7,7]
var c = [7,7,7,7,'7']
var cv = 7

console.log(equalsAray(x))
console.log(equalsAray(y))
console.log(equalsAray(c))
console.log(equalsAray(cv))

