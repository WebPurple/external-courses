var upperFirstSymbol=function(str){
    if (typeof str==='string'){
       return str.charAt(0).toUpperCase() + str.slice(1)
    }
   else console.log('Передана не строка')
   }
var lowerCamelCaseWord=function(str) {
    if (typeof str==='string'){
        var ar=str.split(' ')
        for (var i =0;i<ar.length;++i){
            if (i===0){ar[i]=str.charAt(0).toLowerCase() + ar[i].slice(1)}
            else
            ar[i]=upperFirstSymbol(ar[i])
        }
        return ar.join('')
     }
    else console.log('Передана не строка')
    }
  var str='Say hello to my litle friend!'

 console.log(lowerCamelCaseWord(str))
 console.log(lowerCamelCaseWord({}))
