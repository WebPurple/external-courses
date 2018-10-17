var trimStr= function (str){
 if (typeof str ==='string')
 {
     return str.trim();
 }
 else console.log('Передана не строка')

}

var str='The Warudo!!!'
console.log(str+' '+str.length)
console.log(trimStr(str)+' '+trimStr(str).length)

var st='   Kon      '
console.log(st+' '+st.length)
console.log(trimStr(st)+' '+trimStr(st).length)