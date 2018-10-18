var randomNumber=function(min,max){
		
	 
    if ( (typeof min==='number' && typeof max==='number') && !( isNaN(min) || isNaN(max) )){
        
      return Math.round( Math.random()*(max-min)+min)
   }
  else console.log('Переданы не числа')
  }

  console.log(randomNumber(100,''))

  console.log(randomNumber(10,120))
