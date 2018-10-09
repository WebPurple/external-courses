function showInfoNumberAray(a) {
    if (a instanceof Array) {
    var countEvenOddZero =[0,0,0];
  
    for (var i=0;i<a.length;i++)
    {
        if (a[i]%2===0 && a[i]!==0)
        ++countEvenOddZero[0];
        if (a[i]%2!==0 && a[i]!==0)
        ++countEvenOddZero[1];
        if (a[i]===0)
        ++countEvenOddZero[2];
        }
        console.log(countEvenOddZero);
        
        
    }
    else console.log('Это не массив') ;
}


var a =[1,2,0,3,5,7,6]
showInfoNumberAray(a)

var a =[1,2,0,3,5,7,6,'',null]
showInfoNumberAray(a)

var a =null
showInfoNumberAray(a)