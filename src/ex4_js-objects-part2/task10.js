var reverseString=function(str) {
    if (typeof str==='string'){
        var ar=str.split('')
        ar.reverse()      
        return ar.join('')  
     }
    else console.log('Передана не строка')
    }
  var str='Say hello to my litle friend'
 console.log(reverseString(str))

 str='friend'
 console.log(reverseString(str))

