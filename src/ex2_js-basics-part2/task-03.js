function MyFuncNul () {
var h = 0
var g = 0
var y = 0
var NumberArr2 = [1, 2, 3, 4, 5, 6, 7, 9, 98, 33, 13, 0];
for (var i = 0; i <= ( NumberArr2.length - 1); i++) {
if ( NumberArr2 [i]  !== 0 ) {

    if (( NumberArr2 [i] % 2 ) == 0 )  {
	h = h + 1
        
    }
	else {
	g = g + 1
	}
	        
    }
	else 
	{y = y + 1
		}
		
}
				
		
  console.log( "нечетных " + g);
  console.log( "четных " + h);
console.log( "количество нулей " + y);
}
module.exports = MyFuncNul;