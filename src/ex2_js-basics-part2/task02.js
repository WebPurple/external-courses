function showInfoAray(a) {
      if (a instanceof Array) {
    for (var i=0;i<a.length;i++)
    {
     console.log(a[i])       }

     console.log('Общее число элементов '+a.length)
    }
    else console.log('Это не массив') ;
    }

    var a =[1,2,3,4,5,6]
    showInfoAray(a);

    var a =[10,40,3,4,null,'6','hello',undefined]
    showInfoAray(a)
    
    var a=1
    showInfoAray(a)
