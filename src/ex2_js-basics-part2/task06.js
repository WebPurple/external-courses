function simple() {
    var item = prompt("Введите число", "");
    var res = true;
    var i;
    var number;
    if (item <= 1000) {
     for (i = 2; i < item; i++) {
      if (item <= 1 || item % i === 0) {
        res=false;
        break;
      }
     };
    
    number = (item > 1 && res)?item+ " - простое" : item + " - составное";
    console.log(number);
      }
    
    else {
      console.log("Введенное число больше 1000");
    }
    }
    
    
    
 simple();