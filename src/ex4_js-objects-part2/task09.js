var pushWordToSring=function(str1,str2,num) {
    var ar=[]
    if (typeof str1==='string' && typeof str2==='string' && typeof num==='number'){
         ar=str1.split(' ')
         ar.splice(num+1,0,str2)
           return ar.join(' ')
     }
    else console.log('Передана не строка')
    }

  var str1='Say hello to my litle friend!'
  var str2 ='a'

 console.log(pushWordToSring(str1,str2,4))
 console.log(pushWordToSring(str1,str2,2))