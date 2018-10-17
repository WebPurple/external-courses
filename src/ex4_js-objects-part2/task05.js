var searchOfWord=function(str1,str2){
if ((typeof str1==='string' &&  typeof str2==='string')
){
    return str1.includes(str2)
}
else console.log('Один/оба из переданных параметров не строка')
}

var str='Say hello to my litle friend!'
var st='say'

console.log(searchOfWord(str,st))
st='Say'
console.log(searchOfWord(str,st))
