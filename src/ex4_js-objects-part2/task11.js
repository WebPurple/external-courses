var countElement=function(str) {
    var ar={};
    var char=''
  if (typeof str==='string'){
      
      for (var i=0;i<str.length;++i)
      {    var p=0;
            var cnt=0;
           while (true)
        {   
            if (str.indexOf(str.charAt(i),p)===-1)
            break
            else {++cnt;
                    p=str.indexOf(str.charAt(i),p)+1;}
        
        }
          ar[str.charAt(i)]=cnt
      }
              
      return ar
   }
  else console.log('Передана не строка')
  }
var str='Say hello to my litle friend!'
console.log(countElement(str))