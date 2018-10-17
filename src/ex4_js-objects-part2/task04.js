var upperFirstSymbol=function(str){
 if (typeof str==='string'){
    return str.charAt(0).toUpperCase() + str.slice(1)
 }
else console.log('Передана не строка')
}

var str ='hello'
console.log(upperFirstSymbol(str))
var x={}
console.log(upperFirstSymbol(x))