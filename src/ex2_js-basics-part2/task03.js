function evenOrOddNumber() {
    var arr=[];
    var sum = 0;
    var sum2 = 0;
    var nool = 0;
    var i;
       let items = prompt("Перечислите через запятую элементы", "");
          if ((typeof(items)) === "string" && (typeof(items)) !== null && items !== ""){
                    console.log('ввод верный');
                    arr = items.split(",");
              
                    arr.sort();
                } else {
            alert ("Введите корректные данные");
              i--;
              }
  

    for (i = 0; i < arr.length; i++) {
  if (arr[i]!== 0) {
  
        if (arr[i] % 2 === 0) {
      ++sum;
        }
   else {
     ++sum2; 
      }
  
      } 
      else {
        ++nool;
      }
    }
  console.log("Четных элементов: " + sum);
  console.log("Нечетных элементов: " + sum2);
  console.log("Нулей: " + nool);
  }
  
  evenOrOddNumber();