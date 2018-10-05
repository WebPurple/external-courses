function showInfoNumberAray(Array) {
    var countEvenOddZero =['четных: ',0,' ; нечетных: ',0,' ; нулей: ',0];
  
    for (var i=0;i<a.length;i++)
    {
        if (a[i]%2===0 && a[i]!==0)
        ++countEvenOddZero[1];
        if (a[i]%2!==0 && a[i]!==0)
        ++countEvenOddZero[3];
        if (a[i]===0)
        ++countEvenOddZero[5];
        }
        console.log(countEvenOddZero);
        //console.log('четных: '+countEvenOddZero[1]+' ; нечетных: '+countEvenOddZero[3]+' ; нулей: '+countEvenOddZero[5]);
        console.log(Array)
    }


var a =[1,2,0,3,5,7,6]
showInfoNumberAray(a)

var a =[1,2,0,3,5,7,6,'',null]
showInfoNumberAray(a)