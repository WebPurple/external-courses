function typeNumber(a) {
  
    if (a > 1000) {
      
      console.log('Ошибка, значение > 1000');
      return;
      
    } else if (a > 0 && a <= 3) {
      
      console.log('Число ' + a + ' - простое');
      return; 
            
    } else {
      
      for (var i = 2; i <= parseInt(Math.sqrt(a)); i++) {
        if (a % i === 0) {
          
          console.log('Число ' + a + ' - составное');
          return;
          
        }
    } 
    
    console.log('Число ' + a + ' - простое');
            
    }
  }

module.exports = typeNumber;

