function simpleNumber(x) {
if (typeof x==='number') {
if ((x===0)||(x===1)) return 'Передан 0 или 1'
if ((x>1000)|| (x<0)|| isNaN(x))return 'Данные неверны'

for (var i=2; i<x-1;++i){
{if ((x % i)===0) return 'Число '+x+' - составное число'} ;

} 
return 'Число '+x+' - простое число';
}
else
return 'Не число'
}
 var x=13
 console.log (simpleNumber(x))
var x=15;
console.log (simpleNumber(x))
var x=1
console.log (simpleNumber(x))

